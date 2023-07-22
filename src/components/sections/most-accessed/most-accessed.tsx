import { Thumbnail } from '@components/thumbnail/thumbnail'
import styles from './most-accessed.module.scss'
import { TagLink } from '@components/tag-link/tag-link'
import { SectionTitle } from '@components/section-title/section-title'
import { Container } from '@components/container/container'
import { Section } from '@components/section/section'
import { MusicDetailsInterface } from '@interfaces/song.interface'

export function MostAccessedSection(props: {
    musics: MusicDetailsInterface[];
}) {
    console.log(props.musics);

    return (
        <Section className={styles.section}>
            <Container>
                <SectionTitle>
                    Mais acessadas
                </SectionTitle>

                <TagLink className={styles.viewMore}>
                    Mais
                </TagLink>

                <ul className={styles.grid}>
                    {props.musics.map((music, index) => (
                        <li key={index}>
                            <Thumbnail music={music} />
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}
