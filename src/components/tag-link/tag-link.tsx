import { ReactNode } from 'react';
import styles from './tag-link.module.scss'

export function TagLink(props: {
    children: ReactNode;
    style?: string;
}) {
    return (
        <a className={`${styles.tagLink} ${props.style || ''}`}>
            {props.children}
        </a>
    )
}
