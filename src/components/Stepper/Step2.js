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
import { FormControlLabel, Checkbox } from '@material-ui/core';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useData } from '../../context/data';

let schema = yup.object().shape({
    email: yup.string('Email is must be a string').required('Email is required')
});

export const Step2 = () => {

    const history = useHistory();
    const {data, setValues} = useData();

    const { register, handleSubmit, errors, watch } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });

    const hasPhone = watch('hasPhone');

    const onSubmit = data => {
        setValues(data);
        history.push('/step3');
    };

    const normalizePhoneNumber = value => {
        const phone = parsePhoneNumberFromString(value);
        if(!phone){
            return value;
        }

        return phone.formatInternational();
    };

    const handlePhone = event => {
        event.target.value = normalizePhoneNumber(event.target.value);
    };

    return (
        <MainContainer>
            <Typography
                component="h1"
                variant="h5"
            >Step 2</Typography>
            <Form onSubmit={ handleSubmit(onSubmit) } >
                <Input 
                    ref={ register }
                    type='email'
                    id='email'
                    name='email'
                    label='Email'
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />
                <FormControlLabel 
                    control={
                        <Checkbox 
                            inputRef={ register }
                            name='hasPhone'
                        />
                    }
                    label='Do you have a phone?' 
                />
                {
                    hasPhone && (
                        <Input 
                            ref={ register }
                            type='tel'
                            id='phone'
                            name='phone'
                            label='Phone'
                            error={!!errors.phone}
                            helperText={errors?.phone?.message}
                            onChange={handlePhone}
                        />
                    )
                }
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}
