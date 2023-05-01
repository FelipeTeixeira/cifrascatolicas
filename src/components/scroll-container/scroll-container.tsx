import styles from './scroll-container.module.scss'
import { ReactNode } from 'react';

export function ScrollContainer(props: {
    children: ReactNode[];
    style?: string;
}) {
    return (
        <ul className={`${styles.scrollContainer} ${props.style || ''}`}>
            {props?.children.map((children, index) => (
                <li key={index}>
                    {children}
                </li>
            ))}
        </ul>
    )
}
