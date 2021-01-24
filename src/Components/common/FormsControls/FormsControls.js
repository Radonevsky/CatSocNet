import React from 'react';
import styles from './FormsControls.module.css';


export const Input = (props) =>{
    const hasError = props.touched && props.error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '') }>
            <span>{props.name}</span>
            <div>
                <input {...props} />
            </div>
            {hasError && <span>{props.error}</span>}
        </div>
    )
}
