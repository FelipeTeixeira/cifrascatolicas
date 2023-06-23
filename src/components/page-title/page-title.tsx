import { ReactNode } from 'react';
import styles from './page-title.module.scss'

export function PageTitle(props: {
    children: ReactNode;
    style: string;
}) {
    return (
        <h1 className={`${styles.title} ${props.style}`}>
            {props.children}
        </h1>
    )
}

PageTitle.defaultProps = {
    style: '',
};
