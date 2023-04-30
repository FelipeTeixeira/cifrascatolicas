import styles from './subheader.module.scss'
import { ArrowBackIcon } from '@components/icons/arrow-back-icon';
import { SearchIcon } from '@components/icons/search-icon';

export function SubHeader() {
    return (
        <header className={styles.subheader}>
            {/* TODO - link para voltar */}
            <a className={styles.iconBack}>
                <ArrowBackIcon />
            </a>

            <strong>Cifras Católicas</strong>

            {/* TODO - abrir busca */}
            <button className={styles.search}>
                <SearchIcon width={18} height={18} />
            </button>
        </header>
    )
}
