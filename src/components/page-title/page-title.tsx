import { ReactNode } from 'react';
import styles from './page-title.module.scss'

export function PageTitle(props: {
    children: ReactNode;
    className: string;
}) {
    return (
        <h1 className={`${styles.title} ${props.className}`}>
            {props.children}
        </h1>
    )
}

PageTitle.defaultProps = {
    className: '',
};
