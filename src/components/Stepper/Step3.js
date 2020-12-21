import React from 'react';
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography';
import { MainContainer } from './../MainContainer';
import { Form } from './../Form';
import { PrimaryButton } from './../Form/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { FileInput } from './../Form/FileInput';

import { useData } from '../../context/data';

export const Step3 = () => {

    const history = useHistory();
    const {data, setValues} = useData();
    const { handleSubmit } = useForm();

    const onSubmit = data => {
        setValues({files: 'f1.txt'});
        history.push('/result');
    };

    return (
        <MainContainer>
            <Typography
                component="h1"
                variant="h5"
            >Step 3</Typography>
            <Form onSubmit={ handleSubmit(onSubmit) } >
                {/* <FileInput 
                    name='files' 
                    control={control} 
                /> */}
                <PrimaryButton>Result</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

