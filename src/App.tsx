import React, {useEffect, useState} from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import {PizzaType} from './types/types'
import Skeleton from './components/PizzaBlock/Skeleton'

function App() {
    const [pizzas, setPizzas] = useState<PizzaType[]>([])

    useEffect(() => {
        fetch('https://67ed3c154387d9117bbcda09.mockapi.io/items')
            .then(response => response.json())
            .then(json => setPizzas(json))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <Skeleton/>
                        {pizzas.map(pizza =>
                            <PizzaBlock key={pizza.id} {...pizza}
                            />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
