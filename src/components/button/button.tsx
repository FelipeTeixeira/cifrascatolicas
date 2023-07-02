import styles from './button.module.scss'
import { MouseEventHandler, ReactNode } from 'react';

export function Button(props: {
    children: ReactNode;
    onClick: MouseEventHandler;
    className: string;
}) {
    return (
        <button
            className={`${styles.button} ${props.className}`}
            type='button'
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    className: '',
};
