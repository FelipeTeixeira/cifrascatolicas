import styles from './card.module.scss'
import { Avatar } from '@components/avatar/avatar'
import { MusicDetailsInterface } from '@interfaces/song.interface';

// TODO - alterar nome
export function Card(props: {
    music: MusicDetailsInterface;
}) {
    const { slug, nome, artista } = props.music;

    return (
        <div className={styles.card}>

            <div className={styles.container}>
                <h4 className={styles.title} title={nome.toLowerCase()}>
                    {nome.toLowerCase()}
                </h4>
                <p className={styles.description}>
                    Cifra simplificada
                </p>

                <strong className={styles.tag}>
                    {artista.nome}
                </strong>
            </div>

            <Avatar
                image={artista.imagem}
                alt={`${nome.toLowerCase()} - ${artista.nome}`}
            />
        </div>
    )
}
