import styles from './button.module.scss'
import { ReactNode } from 'react';

export function Button(props: {
    children: ReactNode;
}) {
    return (
        <button type='button' className={styles.button}>
            {props.children}
        </button>
    )
}
