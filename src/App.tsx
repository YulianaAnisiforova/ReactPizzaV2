import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import {Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path={'/'} element={<Home/>} />
                        <Route path={'/cart'} element={<Cart/>} />
                        <Route path={'/*'} element={<NotFound/>} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
