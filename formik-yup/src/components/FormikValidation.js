import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

/*
    initialValue
    validate
    onSubmit
*/
const FormikValidation = () => {
    const initialValue = {
        email: '',
        password: '',
    };
    const handleValidate = (values) => {
        const errors = {};
        const regex = '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i';
        if (!values.email) {
            errors.email = 'Required';
        } else if (!regex.test(values.email)) {
            errors.email = 'Invalid Email Address';
        }
        return errors;
    };
    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validate={(values) => {
                const errors = {};
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(
                        values.email
                    )
                ) {
                    errors.email = 'Invalid Email Address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type='email' name='email' />
                    <ErrorMessage name='email' component='div' />
                    <Field type='password' name='password' />
                    <ErrorMessage name='password' component='div' />
                    <button type='submit' disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikValidation;
