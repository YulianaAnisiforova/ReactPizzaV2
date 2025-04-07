import React, {useState} from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import {Route, Routes} from 'react-router-dom'
import style from "./components/Search/Search.module.css";

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={(value) => setSearchValue(value)} />
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home searchValue={searchValue} />}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App

// <svg className={style.clearIcon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//     <g id="cross">
//     <line x1={'7'} x2={'25'} y1={'7'} y2={'25'}/>
// <line x1={'7'} x2={'25'} y1={'25'} y2={'7'}/>
// </g></svg>