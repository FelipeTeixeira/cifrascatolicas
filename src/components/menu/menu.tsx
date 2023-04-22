import styles from './menu.module.scss'
import { HomeIcon } from '../icons/home-icon'
import { RepertoireIcon } from '../icons/repertoire-icon'
import { SearchIcon } from '../icons/search-icon'

export function Menu() {
    return (
        <nav className={styles.nav}>
            <a href="" className={styles.link}>
                <HomeIcon />
                Inicio
            </a>

            <button type='button' className={styles.searchButton}>
                <SearchIcon />
            </button>

            <a href="" className={styles.link}>
                <RepertoireIcon />
                Repertório
            </a>
        </nav>
    )
}
