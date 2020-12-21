import React from 'react';
import { useForm } from "react-hook-form";
import Typography from '@material-ui/core/Typography';
import { MainContainer } from './../MainContainer';
import { Form } from './../Form';
import { Input } from './../Form/Input';
import { PrimaryButton } from './../Form/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

import { useData } from '../../context/data';

let schema = yup.object().shape({
    firstName: yup.string('First name is must be a string').required('First name is required'),
    lastName: yup.string('Last name is must be a string').required('Last name is required'),
});

export const Step1 = () => {

    const history = useHistory();
    const {data, setValues} = useData();

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        setValues(data);
        history.push('/step2');
    };

    return (
        <MainContainer>
            <Typography
                component="h1"
                variant="h5"
            >Step 1</Typography>
            <Form onSubmit={ handleSubmit(onSubmit) } >
                <Input 
                    ref={ register }
                    type='text'
                    id='firstName'
                    name='firstName'
                    label='First name'
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <Input 
                    ref={ register }
                    type='text'
                    id='lastName'
                    name='lastName'
                    label='Last name'
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}
