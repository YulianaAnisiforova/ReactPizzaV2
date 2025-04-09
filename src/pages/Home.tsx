import React, {createContext, FC, useContext, useEffect, useState} from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import {PizzaType} from '../types/types'
import {AppContext} from '../App'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../redux/store'
import {setCategoryId, setOrderType, setSortType} from '../redux/slices/filterSlice'

type HomeContextType = {
    setCurrentPage: (page: number) => void,
}

export const HomeContext = createContext({} as HomeContextType)

const Home: FC = () => {
    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const sortType = useSelector((state: RootState) => state.filter.sortType)
    const orderType = useSelector((state: RootState) => state.filter.orderType)
    const dispatch = useDispatch<AppDispatch>()

    const {searchValue} = useContext(AppContext)

    const [pizzas, setPizzas] = useState<PizzaType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)

        const category = `category=${categoryId}`
        const sort = `&sortBy=${sortType.sortProperty}`
        const order = `&order=${orderType}`
        // const search = searchValue ? `&search=${searchValue}` : '' // doesn't work properly on MockAPI

        fetch(`https://67ed3c154387d9117bbcda09.mockapi.io/items?${category}${sort}${order}` //no search
        ).then(response => response.json())
            .then(json => {
                setPizzas(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, orderType, searchValue, currentPage])

    const skeletonElements = [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
    const pizzaElements = pizzas
        .filter(pizza => {if (pizza.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return true
        }
        return false})
        .map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)

    return (
        <div className="container">
            <HomeContext value={{
                setCurrentPage,
            }}>

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
            </HomeContext>
        </div>
    )
}

export default Home