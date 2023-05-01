import { Thumbnail } from '@components/thumbnail/thumbnail'
import styles from './most-accessed.module.scss'
import Artista from '@public/teste/artista.png'
import { TagLink } from '@components/tag-link/tag-link'
import { SectionTitle } from '@components/section-title/section-title'
import { Container } from '@components/container/container'

export function MostAccessedSection() {
    return (
        <section className={styles.mostAccessed}>
            <Container>
                <SectionTitle>
                    Mais acessadas
                </SectionTitle>

                <TagLink style={styles.viewMore}>
                    Mais
                </TagLink>

                <ul className={styles.grid}>
                    <li>
                        <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                    </li>
                    <li>
                        <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                    </li>
                    <li>
                        <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                    </li>
                    <li>
                        <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                    </li>
                    <li>
                        <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                    </li>
                    <li>
                        <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                    </li>
                </ul>
            </Container>
        </section>
    )
}
