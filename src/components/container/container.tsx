import { ReactNode } from 'react';
import styles from './container.module.scss'

export function Container(props: {
    children: ReactNode;
    flexDirection: 'column' | 'row';
    hasSidebar: boolean;
    className: string;
}) {
    return (
        <div className={`
            ${styles.container} ${props.className}
            ${props.flexDirection === 'column' ? styles.flexColumn : styles.flexRow}
            ${props.hasSidebar ? styles.hasSidebar : ''}
        `}>
            {props.children}
        </div>
    )
}

Container.defaultProps = {
    className: '',
    flexDirection: 'column',
    hasSidebar: false,
};
