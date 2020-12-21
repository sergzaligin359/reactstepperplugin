import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        width: '100%',
    }
}));

export const Form = ({children, ...props}) => {

    const styles = useStyles();

    return (
        <form
            noValidate
            className={styles.root} 
            { ...props }
        >
            { children }
        </form>
    )
}
