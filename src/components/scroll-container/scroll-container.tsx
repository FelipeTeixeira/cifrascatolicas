import styles from './scroll-container.module.scss'
import { ReactNode } from 'react';

export function ScrollContainer(props: {
    children: ReactNode[];
    className: string;
}) {
    return (
        <ul className={`${styles.scrollContainer} ${props.className}`}>
            {props?.children.map((children, index) => (
                <li key={index}>
                    {children}
                </li>
            ))}
        </ul>
    )
}

ScrollContainer.defaultProps = {
    className: '',
};
