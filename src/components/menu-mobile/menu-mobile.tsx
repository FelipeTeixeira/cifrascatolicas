import styles from './menu-mobile.module.scss'
import { HomeIcon } from '@components/icons/home-icon'
import { RepertoireIcon } from '@components/icons/repertoire-icon'
import { SearchIcon } from '@components/icons/search-icon'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function MenuMobile() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav className={styles.nav}>
                <Link href="/" className={`${styles.link} ${router.pathname === '/' ? styles.isActive : ''}`}>
                    <HomeIcon />
                    Início
                </Link>

                <Link href="/busca" className={styles.searchButton}>
                    <SearchIcon fill='#fff' />
                </Link>

                <Link href="/repertorio" className={`${styles.link} ${router.pathname === '/repertorio' ? styles.isActive : ''}`}>
                    <RepertoireIcon />
                    Repertório
                </Link>

            </nav>
        </>
    )
}
