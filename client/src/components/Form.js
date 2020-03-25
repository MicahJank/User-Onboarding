import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Form = ( { setUsers, users }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        tos: false
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        tos: ''
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        schema.isValid(formState)
            .then(valid => {
                setButtonDisabled(!valid);
            })
    }, [formState])



    const schema = yup.object().shape({
        name: yup.string().required("Name is a required field"),
        email: yup.string().email().required(),
        password: yup.string().min(6, 'Password must have 6 characters').required('Password is required'),
        tos: yup.boolean().oneOf([true], 'Please agree to terms of service').required()
    })

    const validateChange = (event) => {
        yup.reach(schema, event.target.name).validate(event.target.value)
        .then(valid => {
            setErrors({
                ...errors, [event.target.name] : ""
            })
        })
        .catch(err => {
            setErrors({
                ...errors,
                [event.target.name] : err.errors[0]
            })
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axios.post('https://reqres.in/api/users', formState)
            .then(res => {
                console.log(res);
                setUsers([
                    ...users,
                    formState
                ]);
                setFormState({
                    name: '',
                    email: '',
                    password: '',
                    tos: false
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChanges = event => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        }
        validateChange(event);
        setFormState(newFormData);
    }

    return (
        <form className='awesome-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Name
                <input onChange={handleChanges} id='name' placeholder='Name' name='name' value={formState.name} />
                {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
            </label>
            <label htmlFor='email'>
                Email
                <input onChange={handleChanges} name='email' id='email' type='email' placeholder='Email' value={formState.email} />
                {errors.email.length > 0 ? (<p className='error'>{errors.email}</p>) : null}
            </label>
            <label htmlFor='password'>
                Password
                <input onChange={handleChanges} name='password' id='password' type='password' placeholder='Password' value={formState.password} />
                {errors.password.length > 0 ? <p className='error'>{errors.password}</p> : null}
            </label>
            <label htmlFor='tos'>
                <input onChange={handleChanges} name='tos' id='tos' type='checkbox' checked={formState.tos} />
                Terms of Service
                {/* {errors.tos.length > 0 ? <p className='error'>{errors.tos}</p> : null} */}
            </label>
            <button disabled={buttonDisabled}>Submit</button>
        </form>
    )
}

export default Form;