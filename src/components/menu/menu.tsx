import styles from './menu.module.scss'
import { HomeIcon } from '../icons/home-icon'
import { RepertoireIcon } from '../icons/repertoire-icon'
import { SearchIcon } from '../icons/search-icon'
import { SearchModal } from '../search-modal/search-modal'
import { useState } from 'react'

export function Menu() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <nav className={styles.nav}>
                <a href="" className={styles.link}>
                    <HomeIcon />
                    Inicio
                </a>

                <button type='button' className={styles.searchButton}  onClick={() => setVisible(true)}>
                    <SearchIcon fill='#fff' />
                </button>

                <a href="" className={styles.link}>
                    <RepertoireIcon />
                    Repertório
                </a>
            </nav>
            <SearchModal isVisible={visible} onClose={() => setVisible(false)} />
        </>
    )
}
