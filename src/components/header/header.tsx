import Image from 'next/image'
import styles from './header.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import { HomeIcon } from '../icons/home-icon'
import { RepertoireIcon } from '../icons/repertoire-icon'
import { SearchIcon } from '../icons/search-icon'

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt='Logo do Cifras Católicas' priority className={styles.logo} />
            </header>

            <nav className={styles.nav}>
                <a href="">
                    <HomeIcon />
                    Inicio
                </a>

                <button type='button' className={styles.searchButton}>
                    <SearchIcon />
                </button>

                <a href="">
                    <RepertoireIcon />
                    Repertório
                </a>
            </nav>
        </>
    )
}
