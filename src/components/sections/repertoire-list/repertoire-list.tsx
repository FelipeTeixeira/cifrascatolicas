import Image from 'next/image';
import styles from './repertoire-list.module.scss'
import { MusicDetailsInterface } from '@interfaces/song.interface';
import { ArrowExpandIcon } from '@components/icons/arrow-expand-icon';
import { DeleteIcon } from '@components/icons/delete-icon';
import { useState } from 'react';
import { TagLink } from '@components/tag-link/tag-link';
import { DownloadIcon } from '@components/icons/download-icon';
import { Section } from '@components/section/section';
import { Avatar } from '@components/avatar/avatar';

export function RepertoireListSection(props: {
    name: string;
    songs: MusicDetailsInterface[];
}) {
    const [expand, setExpand] = useState<boolean>();

    return (
        <Section className={styles.section}>
            <div className={styles.accordion}>
                <button
                    onClick={() => setExpand(!expand)}
                    className={`${styles.accordion__header} ${expand ? styles.isActive : ''}`}
                    type='button'>
                    {props.name}
                    <ArrowExpandIcon />
                </button>

                <div className={`${styles.accordion__body} ${expand ? styles.isVisible : ''}`}>
                    <ul>

                        {props.songs.map((item, index) => (
                            <li key={index} className={styles.songItem}>
                                <span className={styles.image}>
                                    <Avatar
                                        image={item.imagem}
                                        alt={item.artista.nome}
                                    />
                                </span>

                                <p className={styles.text}>
                                    <strong>
                                        {item.nome}
                                    </strong>
                                    {item.artista.nome}
                                </p>

                                <button className={styles.deleteButton} >
                                    <DeleteIcon width={18} height={18} />
                                </button>
                            </li>
                        ))}
                    </ul>

                    <TagLink className={styles.downloadButton}>
                        <DownloadIcon width={12} height={12} />
                        Baixar
                    </TagLink>
                </div>
            </div>
        </Section>
    )
}
