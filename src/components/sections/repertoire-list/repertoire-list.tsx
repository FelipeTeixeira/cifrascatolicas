import Image from 'next/image';
import styles from './repertoire-list.module.scss'
import { Song } from '@interfaces/song.interface';
import { ArrowExpandIcon } from '@components/icons/arrow-expand-icon';
import { DeleteIcon } from '@components/icons/delete-icon';
import { useState } from 'react';

export function RepertoireListSection(props: {
    songs: Song[];
}) {
    const [expand, setExpand] = useState<boolean>();

    return (
        <section className={styles.section}>

            <div className={styles.accordion}>
                <button
                    onClick={() => setExpand(!expand)}
                    className={`${styles.accordion__header} ${expand ? styles.isActive : ''}`}
                    type='button'>
                    Missa de domingo
                    <ArrowExpandIcon />
                </button>

                <ul className={`${styles.accordion__body} ${expand ? styles.isVisible : ''}`}>

                    {props.songs.map((song, index) => (
                        <li key={index} className={styles.songItem}>
                            {song.image && <Image src={song.image} alt={song.artist} />}

                            <p className={styles.text}>
                                <strong>
                                    {song.music}
                                </strong>
                                {song.artist}
                            </p>

                            <button className={styles.deleteButton} >
                                <DeleteIcon width={18} height={18} />
                            </button>
                        </li>
                    ))}

                </ul>
            </div>

        </section>
    )
}
