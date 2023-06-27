import styles from './album.module.scss'
import Album from '@public/teste/album.png'
import { ArtistCard } from '@components/artist-card/artist-card'
import { Container } from '@components/container/container'
import { Section } from '@components/section/section'

export function AlbumSection() {
    return (
        <Section style={styles.section}>
            <Container hasSidebar={true}>
                <ul className={styles.grid}>
                    {Array.from(Array(7)).map((song, index) => (
                        <li key={index}>
                            <ArtistCard image={Album} alt="" />

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
        </Section>
    )
}
