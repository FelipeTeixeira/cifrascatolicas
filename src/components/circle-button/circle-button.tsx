import styles from './circle-button.module.scss'
import { ReactNode } from 'react';

export function CircleButton(props: {
    children: ReactNode;
    onClick: Function;
    color: 'primary' | 'white';
    hasBorder: boolean;
}) {
    return (
        <button
            type='button'
            className={
            `
                ${styles.button}
                ${props.color === 'white' ? styles.white : ''}
                ${props.hasBorder ? '' : styles.borderless}
            `}
            onClick={() => props.onClick()}>
            {props.children}
        </button>
    )
}

CircleButton.defaultProps = {
    color: 'primary',
    hasBorder: true,
};