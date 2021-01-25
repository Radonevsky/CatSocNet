import React from 'react';
import styles from './FormsControls.module.css';


export const Input = (props) =>{
    const hasError = (props.touched && props.error) || props.submitError;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '') }>
            <div>
                <input {...props} />
            </div>
            {hasError && <span>{props.error || props.submitError }</span>}
        </div>
    )
}
