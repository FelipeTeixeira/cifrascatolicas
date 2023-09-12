import { MusicDetailsInterface } from '@interfaces/song.interface';
import styles from './thumbnail.module.scss'
import { Avatar } from '@components/avatar/avatar';

export function Thumbnail(props: {
    music: MusicDetailsInterface;
}) {
    const { nome, artista } = props.music;

    return (
        <div className={styles.thumbnail}>
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
        </div>
    )
}
