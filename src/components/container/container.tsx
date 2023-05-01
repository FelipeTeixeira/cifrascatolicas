import { ReactNode } from 'react';
import styles from './container.module.scss'

export function Container(props: {
    children: ReactNode;
    flexDirection: 'column' | 'row';
    style: string;
}) {
    return (
        <div className={`
            ${styles.container} ${props.style}
            ${props.flexDirection === 'column' ? styles.flexColumn : styles.flexRow}
        `}>
            {props.children}
        </div>
    )
}

Container.defaultProps = {
    style: '',
    flexDirection: 'column',
};
