import React, {FC, useEffect, useState} from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import {PizzaType} from '../types/types'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../redux/store'
import {setCategoryId, setOrderType, setSortType} from '../redux/slices/filterSlice'
import axios from 'axios'

const Home: FC = () => {
    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const sortType = useSelector((state: RootState) => state.filter.sortType)
    const orderType = useSelector((state: RootState) => state.filter.orderType)

    const searchValue = useSelector((state: RootState) => state.search.searchValue)

    const dispatch = useDispatch<AppDispatch>()

    const [pizzas, setPizzas] = useState<PizzaType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)

        const category = `category=${categoryId}`
        const sort = `&sortBy=${sortType.sortProperty}`
        const order = `&order=${orderType}`
        const search = searchValue ? `&search=${searchValue}` : '' // doesn't work properly with category on MockAPI

        axios.get(`https://67ed3c154387d9117bbcda09.mockapi.io/items?${category}${sort}${order}${search}`)
            .then(response => {
                setPizzas(response.data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)

    }, [categoryId, sortType, orderType, searchValue])

    const skeletonElements = [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
    const pizzaElements = pizzas
        // .filter(pizza => {return pizza.title.toLowerCase().includes(searchValue.toLowerCase());
        // })
        .map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)

    return (
        <div className="container">
                <div className="content__top">
                    <Categories categoryId={categoryId}
                                setCategoryId={(id) => dispatch(setCategoryId(id))}
                    />

                    <Sort sortType={sortType}
                          setSortType={(sortType) => dispatch(setSortType(sortType))}
                          setOrderType={(order) => dispatch(setOrderType(order))}
                    />

                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? skeletonElements : pizzaElements}
                </div>
        </div>
    )
}

export default Home