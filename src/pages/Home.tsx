import React, {FC, useEffect, useRef, useState} from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import {PizzaType} from '../types/types'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../redux/store'
import {setCategoryId, setFilters, setOrderType, setSortType} from '../redux/slices/filterSlice'
import axios from 'axios'
import qs from 'qs'
import {useNavigate} from 'react-router-dom'

const Home: FC = () => {
    const navigate = useNavigate()
    const isSearch = useRef(false)

    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const sortType = useSelector((state: RootState) => state.filter.sortType)
    const orderType = useSelector((state: RootState) => state.filter.orderType)

    const searchValue = useSelector((state: RootState) => state.search.searchValue)

    const dispatch = useDispatch<AppDispatch>()

    const [pizzas, setPizzas] = useState<PizzaType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchPizzas = () => {
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
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search. substring(1))

            dispatch(setFilters({...params}))

            isSearch.current = true
        }
    }, []);

    useEffect(() => {
        if (!isSearch.current) {
            fetchPizzas()
        }

        isSearch.current = false

        window.scrollTo(0, 0)
    }, [categoryId, sortType, orderType, searchValue])

    useEffect(() => {
        const queryString = qs.stringify({
            categoryId,
            sortProperty: sortType.sortProperty,
            orderType,
        })
        navigate(`?${queryString}`)
    }, [categoryId, sortType, orderType]);

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