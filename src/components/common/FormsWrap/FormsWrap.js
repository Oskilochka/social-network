import React from 'react'
import styles from './FormsWrap.module.css'

export const Textarea = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={styles.formWrap + ' ' + (isError ? styles.error : '')}>
            <textarea  {...input} {...props} />
            {isError && <span> {meta.error} </span>}
        </div>
    )
}
export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={styles.formWrap + ' ' + (isError ? styles.error : '')}>
            <input  {...input} {...props} />
            {isError && <span> {meta.error} </span>}
        </div>
    )
}