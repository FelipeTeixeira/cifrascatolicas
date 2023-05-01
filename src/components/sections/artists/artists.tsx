import styles from './artists.module.scss'
import Artista from '@public/teste/artista.png'
import Artista2 from '@public/teste/artista-2.png'
import { TagLink } from '@components/tag-link/tag-link'
import { SectionTitle } from '@components/section-title/section-title'
import { ScrollContainer } from '@components/scroll-container/scroll-container'
import { ArtistCard } from '@components/artist-card/artist-card'
import { Container } from '@components/container/container'

export function ArtistsSection() {
    return (
        <section className={styles.repertoire}>
            <Container>
                <SectionTitle style={styles.title}>
                    Encontre por artistas
                </SectionTitle>

                <TagLink style={styles.viewMore}>
                    Mais
                </TagLink>

                <ScrollContainer style={styles.scrollContainer}>
                    <ArtistCard image={Artista2} legend='Padre Antônio Maria' />
                    <ArtistCard image={Artista} legend='Eliana Ribeiro' />
                    <ArtistCard image={Artista2} legend='Padre Antônio Maria' />
                </ScrollContainer>
            </Container>
        </section>
    )
}
