import { CloseIcon } from '@components/icons/close-icon';
import styles from './song-details-modal.module.scss'
import { MouseEventHandler, useEffect, useState } from 'react'
import { MusicDetailsInterface } from '@interfaces/song.interface';
import { bffGetArtistSong } from '@services/bff.service';
import { Cipher } from '@components/cipher/cipher';
import { Loading } from '@components/loading/loading';

export function SongDetailsModal(props: {
    song: MusicDetailsInterface;
    isVisible: boolean;
    onClose: MouseEventHandler;
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [songDetails, setSongDetails] = useState<MusicDetailsInterface>();
    const { slug, artista } = props.song;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await bffGetArtistSong(artista.slug, slug);
                setSongDetails(response);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className={styles.overlay}></div>

            <div className={styles.modal}>
                <button type='button' className={styles.closeButton} onClick={props.onClose}>
                    <CloseIcon />
                </button>

                <h2 className={styles.title}>
                    {props.song.nome}
                </h2>

                <span className={styles.artist}>
                    {props.song.artista.nome}
                </span>

                {isLoading ?
                    <Loading className={styles.loading} />
                    :
                    <>
                        {songDetails ?
                            <div className={styles.containerCipher}>
                                <Cipher cipher={songDetails.letra || songDetails.cifra || ''} fontSize={12} />
                            </div>
                            : null}
                    </>
                }
            </div>
        </>
    )
}

SongDetailsModal.defaultProps = {
    isVisible: false
};
