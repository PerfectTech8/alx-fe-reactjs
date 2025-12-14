import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(8, "Password must be atleast 8 characters long").max(15, "Password can not be longer than 15 characters").required("Password is required"),
    
})

const  RegistrationForm = () => (
    <Formik initialValues={{name: "", email: "", password: ""}}
    validationSchema={schema}
    onSubmit={(values, {setSubmitting, resetForm}) =>{
        console.log("Form submitted", values);
        setSubmitting(false);
        resetForm();
    }}>
        {({isSubmitting}) => (
            <Form>
                <Field type="text" name="name"/>
                <ErrorMessage name="name" component="div"/>
                <Field type="email" name="email"/>
                <ErrorMessage name="email" component="div"/>
                <Field type="password" name="password"/>
                <ErrorMessage name="password" component="div"/>
                <button type="submit" disabled={isSubmitting}>submit</button>
            </Form>
        )}
    </Formik>
);

export default RegistrationForm;