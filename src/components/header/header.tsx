import Image from 'next/image'
import styles from './header.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import { MenuMobile } from '@components/menu-mobile/menu-mobile'
import { MenuDesktop } from '@components/menu-desktop/menu-desktop'
import Link from 'next/link';
import { Container } from '@components/container/container'

export function Header(props: {
    hasBackground: boolean;
    style: string;
}) {
    return (
        <header className={`
            ${styles.header}
            ${props.style}
            ${props.hasBackground ? '' : styles.hasBackground}
        `}>
            <Container flexDirection='row'>
                <Link href="/">
                    <Image src={Logo} alt='Logo do Cifras Católicas' priority className={styles.logo} />
                </Link>
                <MenuMobile />
                <MenuDesktop />
            </Container>
        </header>
    )
}

Header.defaultProps = {
    hasBackground: true,
    style: '',
};
