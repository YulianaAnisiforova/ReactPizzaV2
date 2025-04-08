import React, {FC} from 'react'
import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'

type PaginationPropsType = {
    setCurrentPage: (page: number) => void,
}

const Pagination: FC<PaginationPropsType> = (props) => {
    return (
        <>
            <ReactPaginate className={style.paginate}
                           breakLabel='...'
                           nextLabel='>'
                           previousLabel='<'
                           pageRangeDisplayed={8}
                           pageCount={3}
                           renderOnZeroPageCount={null}
                           onPageChange={(event) => props.setCurrentPage(event.selected + 1)}
            />
        </>
    )
}

export default Pagination