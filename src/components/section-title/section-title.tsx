import { ReactNode } from 'react';
import styles from './section-title.module.scss'

export function SectionTitle(props: {
    children: ReactNode;
    style?: string;
}) {
    return (
        <h2 className={`${styles.title} ${props.style || ''}`}>
            {props.children}
        </h2>
    )
}
