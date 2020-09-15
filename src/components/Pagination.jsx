import React from 'react'
import Pagination1 from '@material-ui/lab/Pagination';

const Pagination = ({ pages, changePage }) => {

    return (
        <Pagination1 count={pages} variant="outlined" shape="rounded" showFirstButton showLastButton onChange={changePage} />
    )
}

export default Pagination
