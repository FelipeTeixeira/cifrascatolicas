import { ReactNode } from 'react';
import styles from './section.module.scss'

export function Section(props: {
    children: ReactNode;
    className: string;
}) {
    return (
        <section className={`${styles.section} ${props.className}`}>
            {props.children}
        </section>
    )
}

Section.defaultProps = {
    className: '',
};
