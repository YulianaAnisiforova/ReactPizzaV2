import React, {FC, useEffect, useRef, useState} from 'react'
import Categories from '../Categories'
import Sort from '../Sort'
import Skeleton from '../PizzaBlock/Skeleton'
import PizzaBlock from '../PizzaBlock/PizzaBlock'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../../redux/store'
import {setCategoryId, setFilters, setOrderType, setSortType} from '../../redux/slices/filterSlice'
import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import {fetchPizzasThunk, setItems} from '../../redux/slices/pizzaSlice'

const Home: FC = () => {
    const navigate = useNavigate()
    const isSearch = useRef(false)
    const isMounted = useRef(false)

    const categoryId = useSelector((state: RootState) => state.filter.categoryId)
    const sortType = useSelector((state: RootState) => state.filter.sortType)
    const orderType = useSelector((state: RootState) => state.filter.orderType)
    const pizzas = useSelector((state: RootState) => state.pizza.items)
    const status = useSelector((state: RootState) => state.pizza.status)
    const searchValue = useSelector((state: RootState) => state.search.searchValue)

    const dispatch = useDispatch<AppDispatch>()

    // const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryId,
                sortProperty: sortType.sortProperty,
                orderType,
            })

            navigate(`?${queryString}`)
        }

        isMounted.current = true
    }, [categoryId, sortType, orderType]);
    const fetchPizzas = async () => {
        // setIsLoading(true)

        const category = `category=${categoryId}`
        const sort = `&sortBy=${sortType.sortProperty}`
        const order = `&order=${orderType}`
        const search = searchValue ? `&search=${searchValue}` : '' // doesn't work properly with category on MockAPI

        // try {
        dispatch(fetchPizzasThunk({category, sort, order, search}))
        // } catch (error) {
        //     console.log('axios error', error)
        // } finally {
        // setIsLoading(false)
        // }
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))

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

    const skeletonElements = [...new Array(6)].map((_, i) => <Skeleton key={i}/>)

    const pizzaElements = pizzas
        .filter(pizza => {
            return pizza.title.toLowerCase().includes(searchValue.toLowerCase());
        })
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
            {status === 'error'
                ? <div className="content__items">
                    <h2>Произошла ошибка 😕</h2>
                    <p>
                        Попробуйте перезагрузить страницу.
                    </p>
                </div>
                : <div className="content__items">
                    {status === 'loading' ? skeletonElements : pizzaElements}
                </div>
            }
        </div>
    )
}

export default Home