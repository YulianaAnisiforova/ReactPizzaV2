import React, {FC, useContext} from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

const Pagination: FC = () => {

    return (
        <>
            <ReactPaginate className={style.paginate}
                           breakLabel='...'
                           nextLabel='>'
                           previousLabel='<'
                           pageRangeDisplayed={8}
                           pageCount={3}
                           renderOnZeroPageCount={null}
                           onPageChange={(event) => console.log(event.selected + 1)}
            />
        </>
    )
}

export default Pagination