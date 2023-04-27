import styles from './menu.module.scss'
import { HomeIcon } from '@components/icons/home-icon'
import { RepertoireIcon } from '@components/icons/repertoire-icon'
import { SearchIcon } from '@components/icons/search-icon'
import { SearchModal } from '@components/search-modal/search-modal'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Menu() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav className={styles.nav}>
                <Link href="/" className={`${styles.link} ${router.pathname === '/' ? styles.isActive : ''}`}>
                    <HomeIcon />
                    Início
                </Link>

                <button type='button' className={styles.searchButton} onClick={() => setVisible(true)}>
                    <SearchIcon fill='#fff' />
                </button>

                <Link href="repertorio" className={`${styles.link} ${router.pathname === '/repertorio' ? styles.isActive : ''}`}>
                    <RepertoireIcon />
                    Repertório
                </Link>

            </nav>
            <SearchModal isVisible={visible} onClose={() => setVisible(false)} />
        </>
    )
}
