import { ReactNode } from 'react';
import styles from './tag-link.module.scss'
import Link from 'next/link';

export function TagLink(props: {
    children: ReactNode;
    href: string,
    style: string;
}) {
    return (
        <Link href={props.href} className={`${styles.tagLink} ${props.style}`}>
            {props.children}
        </Link>
    )
}

TagLink.defaultProps = {
    style: '',
    href: '',
};
