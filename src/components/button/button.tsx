import styles from './button.module.scss'
import { MouseEventHandler, ReactNode } from 'react';

export function Button(props: {
    children: ReactNode;
    onClick: MouseEventHandler;
    style?: string;
}) {
    return (
        <button
            className={`${styles.button} ${props.style}`}
            type='button'
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    style: '',
};
