import styles from './album.module.scss'
import Album from '@public/teste/album.png'
import { ArtistCard } from '@components/artist-card/artist-card'
import { Container } from '@components/container/container'

export function AlbumSection() {
    return (
        <section className={styles.section}>
            <Container hasSidebar={true}>
                <ul className={styles.grid}>
                    {Array.from(Array(7)).map((song, index) => (
                        <li key={index}>
                            <ArtistCard image={Album} />

                            <strong>
                                Santo Sacrifício
                            </strong>
                            <span>
                                Álbum 2016
                            </span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
