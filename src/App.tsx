import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'

function App() {
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
                            <PizzaBlock title={'Чилл Грилл'} price={489} />
                            <PizzaBlock title={'Пепперони фреш'} price={339} />
                            <PizzaBlock title={'Сырная'} price={349} />
                            <PizzaBlock title={'Аррива!'} price={599} />
                            <PizzaBlock title={'Додо'} price={779} />
                            <PizzaBlock title={'Гавайская'} price={529} />
                            <PizzaBlock title={'Цыпленок барбекю'} price={639} />
                            <PizzaBlock title={'Диабло'} price={639} />
                            <PizzaBlock title={'Песто'} price={589} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default App
