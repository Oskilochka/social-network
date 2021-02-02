import React, {FC} from 'react'
import {Formik, Form} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {saveProfileInfo} from "../../../redux/profile-reducer";
import {Button, Checkbox, TextField} from "@material-ui/core";
import {getContacts} from "../../../redux/selectors/profile-selectors";
import {ContactsType} from "../../../types/commonTypes"

type ValuesTypes = {
    fullName: string,
    aboutMe: string,
    lookingForAJobDescription: string,
    lookingForAJob: boolean
    contacts: ContactsType | undefined
}

type PropsType = {
    setEditMode: (arg0: boolean) => void
}

const values = {
    fullName: '',
    aboutMe: '',
    lookingForAJobDescription: '',
    lookingForAJob: false,
    contacts: undefined
}

export const ProfileDataForm: FC<PropsType> = ({setEditMode}) => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts)
    return (
        <div>
            <h1>Edit Personal Data</h1>
            <Formik
                initialValues={values}
                onSubmit={(values: ValuesTypes) => {
                    dispatch(saveProfileInfo(values))
                    setEditMode(false)
                }}>
                {() => (
                    <Form>
                        <TextField name="fullName" placeholder='Full Name'/>
                        <TextField name="aboutMe" placeholder='about me'/>
                        <TextField name="lookingForAJobDescription" placeholder="lookingForAJobDescription"/>
                        <Checkbox name="lookingForAJob"/>

                        <b>Contacts:</b>

                        {Object.keys(contacts!).map(key => {
                            return <div key={key}>
                                {key}: <TextField name={"contacts." + key} placeholder={key}/>
                            </div>
                        })}
                        <Button variant="contained" type="submit" color='primary'>
                            Save
                        </Button>
                        <Button variant="contained" type="submit" color='primary'>
                            Discard
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

