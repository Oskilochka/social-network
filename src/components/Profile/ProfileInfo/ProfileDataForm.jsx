import React from 'react'
import {Formik, Form, Field} from 'formik';
import {useDispatch} from "react-redux";
import {saveProfileInfo} from "../../../redux/profile-reducer";


export const ProfileDataForm = (props) => {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Edit Personal Data</h1>
            <Formik
                initialValues={{fullName: '', aboutMe: '', lookingForAJobDescription: '', lookingForAJob: ''}}
                onSubmit={(values) => {
                    dispatch(saveProfileInfo(values))
                    props.setEditMode(false)
                }}
            >
                {() => (
                    <Form>
                        <Field name="fullName" placeholder='Full Name'/>
                        <Field name="aboutMe" placeholder='about me'/>
                        <Field name="lookingForAJobDescription" placeholder="lookingForAJobDescription"/>
                        <Field type='checkbox' name="lookingForAJob" />
                        <b>Contacts:</b> {Object.keys(props.profile.contacts).map( key => {
                                return <div key={key}>
                                    {key}: <Field name={"contacts." + key} placeholder={key} />
                                </div>
                    })}
                        <button type="submit" >
                            Save
                        </button>
                        <button  type="cancel" onClick={() => {props.setEditMode(false)}}>
                            Discard
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

