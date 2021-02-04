import * as React from 'react';
import {Formik, Field, Form} from 'formik';
import {useDispatch} from "react-redux";
import {Button} from "@material-ui/core";
import {FC} from "react";
import {actions} from "../../../redux/profile-reducer";

type ValuesType = {
    post: string
}

export const AddPostFormik: FC = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    post: ''
                }}
                onSubmit={(values: ValuesType) => {
                    dispatch(actions.addPostActionCreator(values.post))
                }}>
                {() => (
                    <Form>
                        <Field id="post" name="post" placeholder="post"/>
                        <Button type="submit" color="primary">Add post</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}