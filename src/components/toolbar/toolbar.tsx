import styles from './toolbar.module.scss'
import { PlayIcon } from '@components/icons/play-icon'

export function Toolbar() {
    return (
        <div className={styles.toolbar}>
            <p>
                Auto rolagem
            </p>

            <button className={styles.button} onClick={() => alert('teste')} type="button">
                <PlayIcon />
            </button>

            <button className={`${styles.button} ${styles.secondary}`} onClick={() => alert('teste')} color='white' type="button">
                1x
            </button>

            {/* BOTAO DE SUBIR A TELA */}
        </div>
    )
}
