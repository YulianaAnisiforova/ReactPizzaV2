import React, {createContext, useState} from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import {Route, Routes} from 'react-router-dom'

type AppContextType = {
    searchValue: string,
    setSearchValue: (value: string) => void,
}

export const AppContext = createContext({} as AppContextType)

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <AppContext.Provider value={{searchValue, setSearchValue}}>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Home searchValue={searchValue} />}/>
                        <Route path={'/cart'} element={<Cart/>}/>
                        <Route path={'/*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </AppContext.Provider>
        </div>
    )
}

export default App
