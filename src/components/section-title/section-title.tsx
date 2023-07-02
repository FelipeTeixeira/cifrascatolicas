import { ReactNode } from 'react';
import styles from './section-title.module.scss'

export function SectionTitle(props: {
    children: ReactNode;
    className: string;
}) {
    return (
        <h2 className={`${styles.title} ${props.className}`}>
            {props.children}
        </h2>
    )
}

SectionTitle.defaultProps = {
    className: '',
};
