import React from 'react';
import { Controller } from 'react-hook-form';
import Drop from 'react-drop';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';

export const FileInput = ({ control, name }) => {
    return (
        <Controller 
            control={control} 
            name={name} 
            defaultValue={[]}
            render={({ onChange, onBlur, value }) => <>
                    <Drop onDrop={onChange} >
                        {
                            ({ getRootProps, getInputProps }) => (
                                <Paper variant='outlined' { ...getRootProps() }>
                                    <input 
                                        name={name} 
                                        onBlur={onBlur}
                                        { ...getInputProps() }
                                    />
                                    <p>Drag and drop files here...</p>
                                </Paper>
                            )
                        }
                    </Drop>
                    <List>
                        {
                            value.map(({name}, index) => <ListItem>{index+1} {name}</ListItem>)
                        }
                    </List>
                </>
            }
        >
            
        </Controller>
    )
}
