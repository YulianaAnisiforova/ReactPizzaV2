import React, {FC, useCallback, useRef, useState} from 'react'
import style from './Search.module.css'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '../../redux/store'
import {setSearchValue} from '../../redux/slices/searchSlice'
import debounce from 'lodash.debounce'

const Search: FC = () => {
    const [valueForInput, setValueForInput] = useState('')
    const dispatch = useDispatch<AppDispatch>()
    const inputRef = useRef<HTMLInputElement>(null)

    const updateSearchValue = useCallback(
        debounce((valueForInput) => {
            dispatch(setSearchValue(valueForInput))
        }, 500)
    , [])

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueForInput(event.currentTarget.value)
        updateSearchValue(event.currentTarget.value)
    }

    const handleClearClick = () => {
        setValueForInput('')
        dispatch(setSearchValue(''))
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div className={style.root}>
            <input type={'text'} placeholder={'Поиск пиццы ...'}
                   ref={inputRef}
                   className={style.input}
                   value={valueForInput}
                   onChange={(event) => handleInput(event)}
            />
            {valueForInput &&
            (<svg className={style.clearIcon}
                  onClick={handleClearClick}
                  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g id="grid_system"/><g id="_icons">
                <path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"/>
            </g></svg>)}
        </div>
    )
}

export default Search