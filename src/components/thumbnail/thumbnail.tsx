import { MusicDetailsInterface } from '@interfaces/song.interface';
import styles from './thumbnail.module.scss'
import { Avatar } from '@components/avatar/avatar';
import Link from 'next/link';

export function Thumbnail(props: {
    music: MusicDetailsInterface;
}) {
    const { nome, artista, slug } = props.music;

    return (
        <Link href={`${artista.slug}/${slug}`} className={styles.thumbnail}>
            <span className={styles.image}>
                <Avatar
                    image={artista.imagem}
                    alt={`${nome} ${artista.nome}`}
                    className={styles.avatarIcon}
                />
            </span>

            <p className={styles.description}>
                <strong title={nome.toLowerCase()}>
                    {nome.toLowerCase()}
                </strong>
                {artista.nome.toLowerCase()}
            </p>
        </Link>
    )
}
