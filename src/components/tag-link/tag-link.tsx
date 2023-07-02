import { ReactNode } from 'react';
import styles from './tag-link.module.scss'
import Link from 'next/link';

export function TagLink(props: {
    children: ReactNode;
    href: string,
    className: string;
}) {
    return (
        <Link href={props.href} className={`${styles.tagLink} ${props.className}`}>
            {props.children}
        </Link>
    )
}

TagLink.defaultProps = {
    className: '',
    href: '',
};
