import { CircleButton } from '@components/circle-button/circle-button'
import styles from './toolbar.module.scss'
import { PlayIcon } from '@components/icons/play-icon'

export function Toolbar() {
    return (
        <div className={styles.toolbar}>
            <p>
            Auto rolagem
            </p>

            <CircleButton onClick={() => alert('teste')} hasBorder={false}>
                <PlayIcon />
            </CircleButton>

            <CircleButton onClick={() => alert('teste')} color='white' hasBorder={false}>
                1x
            </CircleButton>
        </div>
    )
}
