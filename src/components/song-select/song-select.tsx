import styles from './song-select.module.scss'
import { CircleButton } from '@components/circle-button/circle-button';
import { ViewIcon } from '@components/icons/view-icon';
import { AddIcon } from '@components/icons/add-icon';
import { Song } from '@interfaces/song.interface';

export function SongSelect(props: {
    onSelectSong: Function;
    song: Song;
}) {
    return (
        <div className={styles.songSelect}>
            <p className={styles.text}>
                <strong className={styles.title}>
                    {props.song.song}
                </strong>
                {props.song.artist}
            </p>

            <CircleButton onClick={() => props.onSelectSong()} color='white'>
                <ViewIcon />
            </CircleButton>

            <CircleButton onClick={() => alert(true)}>
                <AddIcon />
            </CircleButton>
        </div>
    )
}
