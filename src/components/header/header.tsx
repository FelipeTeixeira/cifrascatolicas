import Image from 'next/image'
import styles from './header.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import { Menu } from '@components/menu/menu'

export function Header(props: {
    hasBackground: boolean;
}) {
    return (
        <>
            <header className={`${styles.header} ${props.hasBackground ? '' : styles.hasBackground}`}>
                <Image src={Logo} alt='Logo do Cifras Católicas' priority className={styles.logo} />
                <Menu />
            </header>
        </>
    )
}

Header.defaultProps = {
    hasBackground: true,
};
