import styles from './artists.module.scss'
import Artista from '@public/teste/artista.png'
import Artista2 from '@public/teste/artista-2.png'
import { TagLink } from '@components/tag-link/tag-link'
import { SectionTitle } from '@components/section-title/section-title'
import { ScrollContainer } from '@components/scroll-container/scroll-container'
import { ArtistCard } from '@components/artist-card/artist-card'
import { Container } from '@components/container/container'
import Link from 'next/link'
import { ArtistInterface } from '@interfaces/artist.interface'

export function ArtistsSection(props: {
    artists: ArtistInterface[]
}) {
    return (
        <section className={styles.section}>
            <Container>
                <SectionTitle className={styles.title}>
                    Encontre por artistas
                </SectionTitle>

                <TagLink href="/artistas" className={styles.viewMore}>
                    Mais
                </TagLink>

                <ScrollContainer className={styles.scrollContainer}>
                    {props.artists.map((artist, index) => (
                        <Link href={`/${artist.slug}`} key={index}>
                            <ArtistCard
                                className={styles.artistImage}
                                image={`https://cifrascatolicas.com.br/imagens/${artist.slug}.png`}
                                legend={artist.nome}
                                alt={artist.nome}
                            />
                        </Link>
                    ))}
                </ScrollContainer>
            </Container>
        </section>
    )
}
