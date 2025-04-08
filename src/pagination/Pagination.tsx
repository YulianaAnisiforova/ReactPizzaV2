import React, {FC, useContext} from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'
import {HomeContext} from '../pages/Home'

const Pagination: FC = () => {
    const {setCurrentPage} = useContext(HomeContext)

    return (
        <>
            <ReactPaginate className={style.paginate}
                           breakLabel='...'
                           nextLabel='>'
                           previousLabel='<'
                           pageRangeDisplayed={8}
                           pageCount={3}
                           renderOnZeroPageCount={null}
                           onPageChange={(event) => setCurrentPage(event.selected + 1)}
            />
        </>
    )
}

export default Pagination