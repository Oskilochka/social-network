import React, {FC} from 'react'
import styles from "./MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utilities/validators/validators";
import {Textarea} from "../../common/FormsWrap/FormsWrap";

const maxPostLength = maxLength(100)

type NewPostFormType = {
    handleSubmit: any
}

const NewPostForm: FC<NewPostFormType> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field className={styles.postInput} placeholder='Write whatever you want' name='newPostText'
                   validate={[required, maxPostLength]}
                   component={Textarea}
            />
            <button className={styles.addPostBtn}>Add post</button>
        </form>
    )
}

export const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)
