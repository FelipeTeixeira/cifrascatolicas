import { CloseIcon } from '@components/icons/close-icon';
import styles from './music-details-modal.module.scss'
import { MouseEventHandler } from 'react'
import { Song } from '@interfaces/song.interface';

export function MusicDetailsModal(props: {
    song: Song;
    isVisible: boolean;
    onClose: MouseEventHandler;
}) {
    return (
        <>
            <div className={styles.overlay}></div>

            <div className={styles.modal}>
                <button type='button' className={styles.closeButton} onClick={props.onClose}>
                    <CloseIcon />
                </button>

                <h2 className={styles.title}>
                    {props.song.music}
                </h2>

                <p className={styles.description}>
                    {props.song.artist}

                    <br />

                    Alma sedenta necessita do amor de deus
                    Inunda-me então com teu espírito
                    senhor
                    Quero da tua água
                    Renascer no teu caminho de amor
                    Até transbordar
                    Remover anúncio
                    Água viva senhor, faz chover sobre nós
                    Uma vida de amor, só encontro em vós
                    Água viva senhor, faz chover sobre nós
                    Uma vida de amor, só encontro em vós
                    de todo pecado quero me lavar
                    de todo pecado quero me lavar
                </p>
            </div>
        </>
    )
}

MusicDetailsModal.defaultProps = {
    isVisible: false
};
