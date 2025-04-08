import React, {createContext, FC, useContext, useEffect, useState} from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Skeleton from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import {PizzaType} from '../types/types'
import Pagination from '../pagination/Pagination'
import {AppContext} from '../App'

type HomeContextType = {
    setCurrentPage: (page: number) => void,
}

export const HomeContext = createContext({} as HomeContextType)

const Home: FC = () => {
    const {searchValue} = useContext(AppContext)

    const [pizzas, setPizzas] = useState<PizzaType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] =
        useState({name: 'популярности', sortProperty: 'rating'})
    const [orderType, setOrderType] = useState('asc')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)

        const category = `&category=${categoryId}`
        const sort = `&sortBy=${sortType.sortProperty}`
        const order = `&order=${orderType}`
        const search = searchValue ? `&search=${searchValue}` : ''

        // fetch(`https://67ed3c154387d9117bbcda09.mockapi.io/items?${category}${sort}${order}${search}` //no search
        fetch(`https://67ed3c154387d9117bbcda09.mockapi.io/items?page=${currentPage}&limit=4${search}
                                                                                     ${sort}
                                                                                     ${order}
                                                                                     ${category}` //no categories
        ).then(response => response.json())
            .then(json => {
                setPizzas(json)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, orderType, searchValue, currentPage])

    const skeletonElements = [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
    const pizzaElements = pizzas
        // .filter(pizza => {if (pizza.title.toLowerCase().includes(props.searchValue.toLowerCase())) {
        //     return true
        // }
        // return false})
        .map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)

    return (
        <div className="container">
            <HomeContext value={{
                setCurrentPage,
            }}>

                <div className="content__top">
                    <Categories categoryId={categoryId} setCategoryId={(id) => setCategoryId(id)}/>
                    <Sort sortType={sortType} setSortType={(sortType) => setSortType(sortType)}
                          setOrderType={(order) => setOrderType(order)}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? skeletonElements : pizzaElements}
                </div>
                <Pagination />
            </HomeContext>
        </div>
    )
}

export default Home