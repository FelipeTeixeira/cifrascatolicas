import { Thumbnail } from '@/components/thumbnail/thumbnail'
import styles from './most-accessed.module.scss'
import Artista from '@public/teste/artista.png'
import { TagLink } from '@/components/tag-link/tag-link'
import { SectionTitle } from '@/components/section-title/section-title'

export function MostAccessed() {
    return (
        <section className={styles.mostAccessed}>
            <SectionTitle>
                Mais acessadas
            </SectionTitle>

            <TagLink style={styles.viewMore}>
                Mais
            </TagLink>

            <ul>
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
        </section>
    )
}
