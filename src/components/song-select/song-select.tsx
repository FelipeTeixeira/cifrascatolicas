import styles from './song-select.module.scss'
import { CircleButton } from '@components/circle-button/circle-button';
import { ViewIcon } from '@components/icons/view-icon';
import { AddIcon } from '@components/icons/add-icon';
import { MusicDetailsInterface } from '@interfaces/song.interface';
import { RemoveIcon } from '@components/icons/remove-icon';
import { DeleteIcon } from '@components/icons/delete-icon';

interface SongSelectProps {
    onSelectDetails: () => void;
    onAddPlaylist: () => void;
    song: MusicDetailsInterface;
    showSelectDetails: boolean;
    showAddPlaylist: boolean;
    showRemove: boolean;
}

export function SongSelect({
    onSelectDetails,
    onAddPlaylist,
    song,
    showSelectDetails,
    showAddPlaylist,
    showRemove,
}: SongSelectProps) {
    return (
        <div className={styles.songSelect}>
            <p className={styles.text}>
                <strong className={`${styles.title} ${styles.ellipsis}`}>
                    {song.nome}
                </strong>
                <span className={styles.ellipsis}>
                    {song.artista.nome}
                </span>
            </p>

            {showSelectDetails ?
                <CircleButton onClick={onSelectDetails} color='white'>
                    <ViewIcon />
                </CircleButton>
                : null
            }

            {showAddPlaylist ?
                <CircleButton onClick={onAddPlaylist}>
                    <AddIcon />
                </CircleButton>
                : null}

            {showRemove ?
                <CircleButton onClick={onAddPlaylist} color='white'>
                    <DeleteIcon />
                </CircleButton>
                : null}
        </div>
    )
}

SongSelect.defaultProps = {
    onSelectDetails: () => undefined,
    onAddPlaylist: () => undefined,
    showSelectDetails: true,
    showAddPlaylist: true,
    showRemove: false,
};
