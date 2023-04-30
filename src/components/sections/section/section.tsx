import { ReactNode } from 'react';
import styles from './section.module.scss'

export function Section(props: {
    children: ReactNode;
    style?: string;
}) {
    return (
        <section className={`${styles.section} ${props.style}`}>
            {props.children}
        </section>
    )
}

Section.defaultProps = {
    style: '',
};
