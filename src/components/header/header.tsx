import Image from 'next/image'
import styles from './header.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import { Menu } from '@components/menu/menu'
import Link from 'next/link';

export function Header(props: {
    hasBackground: boolean;
    hideMobile: boolean;
    style: string;
}) {
    return (
        <header className={`
            ${styles.header}
            ${props.style}
            ${props.hasBackground ? '' : styles.hasBackground}
            ${props.hideMobile ? styles.hideMobile : ''}`
        }>
            <Link href="/">
                <Image src={Logo} alt='Logo do Cifras Católicas' priority className={styles.logo} />
            </Link>
            <Menu />
        </header>
    )
}

Header.defaultProps = {
    hasBackground: true,
    hideMobile: false,
    style: '',
};
