import React, {FC} from 'react'
import {Formik, Form, Field} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {saveProfileInfo} from "../../../redux/profile-reducer";
import {Button} from "@material-ui/core";
import {getContacts} from "../../../redux/selectors/profile-selectors";
import {ContactsType} from "../../../types/commonTypes";

type ValuesTypes = {
    fullName: string,
    aboutMe: string,
    lookingForAJobDescription: string,
    lookingForAJob: boolean
}

type PropsType = {
    setEditMode: (args: boolean) => void
}

export const ProfileDataForm: FC<PropsType> = ({setEditMode}) => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts)
    // @ts-ignore
    return (
        <div>
            <h1>Edit Personal Data</h1>
            <Formik
                // @ts-ignore
                initialValues={ {fullName: '', aboutMe: '', lookingForAJobDescription: '', lookingForAJob: ''   } }
                onSubmit={(values: ValuesTypes) => {
                    // @ts-ignore
                    dispatch(saveProfileInfo(values))
                    setEditMode(false)
                }}

            >
                {() => (
                    <Form>
                        <Field name="fullName" placeholder='Full Name'/>
                        <Field name="aboutMe" placeholder='about me'/>
                        <Field name="lookingForAJobDescription" placeholder="lookingForAJobDescription"/>
                        <Field type='checkbox' name="lookingForAJob" />

                        <b>Contacts:</b>

                        {Object.keys(contacts!).map( key => {
                                return <div key={key}>
                                    {key}: <Field name={"contacts." + key} placeholder={key} />
                                </div>
                    })}
                        <button type="submit" >
                            Save
                        </button>
                        <Button  type="submit" >
                            Discard
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

