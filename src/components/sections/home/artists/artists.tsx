import styles from './artists.module.scss'
import Artista from '@public/teste/artista.png'
import Artista2 from '@public/teste/artista-2.png'
import { TagLink } from '@/components/tag-link/tag-link'
import { SectionTitle } from '@/components/section-title/section-title'
import { ScrollContainer } from '@/components/scroll-container/scroll-container'
import { ArtistCard } from '@/components/artist-card/artist-card'

export function Artists() {
    return (
        <section className={styles.repertoire}>
            <SectionTitle style={styles.title}>
                Encontre por artistas
            </SectionTitle>

            <TagLink style={styles.viewMore}>
                Mais
            </TagLink>

            <ScrollContainer maxWidth='140px'>
                <ArtistCard image={Artista2} name='Padre Antônio Maria' />
                <ArtistCard image={Artista} name='Eliana Ribeiro' />
                <ArtistCard image={Artista2} name='Padre Antônio Maria' />
            </ScrollContainer>
        </section>
    )
}
