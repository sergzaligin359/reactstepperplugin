import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2)
    }
}));

export const PrimaryButton = ({ children, props }) => {

    const styles = useStyles();

    return (
        <Button 
            className={styles.root} 
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            { ...props }
        >{ children }</Button>
    )
}
