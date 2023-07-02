import { ReactNode } from 'react';
import styles from './tag.module.scss'

export function Tag(props: {
    children: ReactNode;
    className: string;
}) {
    return (
        <span className={`${styles.tag} ${props.className}`}>
            {props.children}
        </span>
    )
}

Tag.defaultProps = {
    className: '',
};
