import { ShareIcon } from '@components/icons/share-icon';
import styles from './video.module.scss'
import { CircleButton } from '@components/circle-button/circle-button'
import { PlaylistIcon } from '@components/icons/playlist-icon';
import { Modal } from '@components/modal/modal';
import { ShareModal } from '@components/share-modal/share-modal';
import { useState } from 'react';
import { TEXTS } from 'src/core/constants/texts';

export function Video(props: {
    pageTitle: string;
    songName: string;
    videoId: string;
}) {
    const { pageTitle, songName, videoId } = props;
    const [visibleShareModal, setVisibleShareModal] = useState<boolean>(false);
    return (
        <>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h3 className={styles.song}>
                        {songName}
                    </h3>

                    <button className={styles.button}>
                        <PlaylistIcon />
                        Adicionar a playlist
                    </button>

                    <button className={styles.button} type="button" onClick={() => setVisibleShareModal(true)}>
                        <ShareIcon />
                        Compartilhar
                    </button>

                    <CircleButton
                        className={styles.circleButton}
                        onClick={() => alert('teste')}
                        color='white'
                        hasBorder={false}>
                        <PlaylistIcon />
                    </CircleButton>

                    <CircleButton
                        className={styles.circleButton}
                        onClick={() => setVisibleShareModal(true)}
                        color='white'
                        hasBorder={false}>
                        <ShareIcon />
                    </CircleButton>
                </div>

                <div className={styles.video}>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                    </iframe>
                </div>
            </div>

            {visibleShareModal ?
                <Modal
                    title={TEXTS.SHARE_MODAL.TITLE}
                    description={TEXTS.SHARE_MODAL.DESCRIPTION}
                    onClose={() => setVisibleShareModal(false)}>
                    <ShareModal
                        description={pageTitle}
                        url={window.location.href}
                    />
                </Modal> : ''}
        </>
    )
}
