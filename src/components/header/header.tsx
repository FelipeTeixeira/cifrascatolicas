import Image from 'next/image'
import styles from './header.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import { MenuMobile } from '@components/menu-mobile/menu-mobile'
import { MenuDesktop } from '@components/menu-desktop/menu-desktop'
import Link from 'next/link';
import { Container } from '@components/container/container'
import useScrollDirection from '@hooks/use-scroll-direction'

export function Header(props: {
    hasBackground: boolean;
    hideMenuMobile: boolean
}) {
    const { scrollDirection, scrollYPosition } = useScrollDirection();
    return (
        <header className={`
            ${styles.header}
            ${(props.hasBackground || scrollYPosition > 20) ? '' : styles.hasBackground}
            ${scrollDirection === 'down' ? styles.hide : ''}
        `}>
            <Container flexDirection='row'>
                <Link href="/">
                    <Image src={Logo} alt='Logo do Cifras Católicas' priority className={styles.logo} />
                </Link>
                {!props.hideMenuMobile ? <MenuMobile /> : null}
                <MenuDesktop textColor={(props.hasBackground || scrollYPosition > 20) ? 'black' : 'white'} />
            </Container>
        </header>
    )
}

Header.defaultProps = {
    hasBackground: true,
    hideMenuMobile: false
};
