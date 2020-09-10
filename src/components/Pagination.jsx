import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination1 from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Pagination = ({ pages, changePage }) => {

    const classes = useStyles();

    return (
        // <div className={classes.root}>
            <Pagination1 count={pages} variant="outlined" shape="rounded" showFirstButton showLastButton onChange={changePage} />
        // </div>

    )
}

export default Pagination
