import styles from './scroll-container.module.scss'
import { ReactNode } from 'react';

export function ScrollContainer(props: {
    children: ReactNode[];
    style?: string;
    maxWidth?: string;
    hasPadding?: boolean;
}) {
    return (
        <ul className={`${styles.scrollContainer} ${props.style || ''} ${props.hasPadding ? styles.hasPadding : ''}`}>
            {props?.children.map((children, index) => (
                <li key={index} style={{ maxWidth: props.maxWidth || '280px' }}>
                    {children}
                </li>
            ))}
        </ul>
    )
}
