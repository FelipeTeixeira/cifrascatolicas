import styles from './button.module.scss'
import { MouseEventHandler, ReactNode } from 'react';

export function Button(props: {
    children: ReactNode;
    onClick: MouseEventHandler;
}) {
    return (
        <button type='button' className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
