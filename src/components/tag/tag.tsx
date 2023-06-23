import { ReactNode } from 'react';
import styles from './tag.module.scss'

export function Tag(props: {
    children: ReactNode;
    style: string;
}) {
    return (
        <span className={`${styles.tag} ${props.style}`}>
            {props.children}
        </span>
    )
}

Tag.defaultProps = {
    style: '',
};
