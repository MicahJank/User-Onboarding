import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        input, select {
            margin-top: 20px;
            padding: 10px;
            font-size: 1rem;
            border: none;
            align-self: center;
        }

        input:first-child {
            margin-top: 5px;
        }

        button {
           width: 100%;
           padding: 10px;
           border: none;
           background-color: #0088CC;
           color: white;
           font-size: 1rem;
           cursor: pointer; 
           margin-top: 20px;
        }

        div {
            color: red;
            position: relative;
            left: 8px;
        }
    }
`;

const UserForm = ( { errors, touched, values, status, addUserFunction } ) => {
    // const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            // setUser([...user, status]);
            addUserFunction(status);
        }
      
    }, [status]);


    // Notice the first 4 fields all dont have an 'component' type, this is because formik sets the default component type to input, so its not needed.
    return (
        <FormContainer> 
            <Form>
                <Field type='text' name='name' placeholder='Name' />
                <ErrorMessage name='name' component='div' />

                <Field type='email' name='email' placeholder='Email' />
                <ErrorMessage name='email' component='div' />

                <Field type='password' name='password' placeholder='Password' />
                <ErrorMessage name='password' component='div' />

                <Field component='select' name='dropdown' placeholder='Please Select'>
                    <option>Please Select A Position</option>
                    <option value='UI Developer'>UI Developer</option>
                    <option value='Front End Developer'>Front-End Developer</option>
                    <option value='Back End Developer'>Back-End Developer</option>
                    <option value='Coffee Maker'>Person Who Makes Coffee</option>
                </Field>

                <label>
                    <Field type='checkbox' name='tos' checked={values.tos}/>
                    Terms of Service
                </label>
                <ErrorMessage name='tos' component='div' />
                
                <button type='submit'>Register</button>
            </Form>
        </FormContainer>
    );
};

const formikHOC = withFormik({
    // this sets up setting the values of the inputs
    mapPropsToValues({ name, email, password, tos, dropdown }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false,
            dropdown: dropdown || ''
        };
    },
    // this sets up form validation
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required(),
        password: Yup.string().required(),
        tos: Yup.bool().oneOf([true], 'Terms of Service required')
    }),
    // this sets ups submitting the form
   handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
       axios.post('https://reqres.in/api/users', values)
        .then(apiData => {
            // console.log('res: ', apiData);
            setStatus(apiData.data);
            resetForm();
            // setSubmitting(false);
        })
        .catch(err => alert(err));
   }
});

const UserFormWithFormik = formikHOC(UserForm);

export default UserFormWithFormik;