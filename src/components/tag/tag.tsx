import { ReactNode } from 'react';
import styles from './tag.module.scss'

export function Tag(props: {
    children: ReactNode;
}) {
    return (
        <span className={styles.tag}>
            {props.children}
        </span>
    )
}
