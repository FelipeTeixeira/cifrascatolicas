import Image from 'next/image'
import styles from './header.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import { Menu } from '../menu/menu'

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt='Logo do Cifras Católicas' priority className={styles.logo} />
                <Menu />
            </header>
        </>
    )
}
