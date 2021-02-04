import React, {FC} from 'react'
import {Form, Formik, Field} from 'formik';
import {Button} from "@material-ui/core";
import {actions} from "../../redux/dialogs-reducer";
import {useDispatch} from "react-redux";

type ValuesType = {
    newMessage: string
}

export const AddNewMessageFormik: FC = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <Formik initialValues={{newMessage: ''}} onSubmit={(values: ValuesType) => {
                dispatch(actions.sendMessageCreator(values.newMessage))
            }}>
                <Form>
                    <Field id='newMessage' name='newMessage' placeholder='Write new message here' />
                    <Button type='submit' color='primary' variant='contained' >Send</Button>
                </Form>
            </Formik>
        </div>
    )
}

