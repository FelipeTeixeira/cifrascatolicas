import styles from './music-select.module.scss'
import { CircleButton } from '@components/circle-button/circle-button';
import { ViewIcon } from '@components/icons/view-icon';
import { AddIcon } from '@components/icons/add-icon';
import { Song } from '@interfaces/song.interface';

export function MusicSelect(props: {
    onSelectMusic: Function;
    song: Song;
}) {
    return (
        <div className={styles.musicSelect}>
            <p className={styles.text}>
                <strong className={styles.title}>
                    {props.song.music}
                </strong>
                {props.song.artist}
            </p>

            <CircleButton onClick={() => props.onSelectMusic()} color='white'>
                <ViewIcon />
            </CircleButton>

            <CircleButton onClick={() => alert(true)}>
                <AddIcon />
            </CircleButton>
        </div>
    )
}
