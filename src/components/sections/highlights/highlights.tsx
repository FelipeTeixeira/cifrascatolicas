import { Card } from '@components/card/card'
import styles from './highlights.module.scss'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { ScrollContainer } from '@components/scroll-container/scroll-container'
import { Container } from '@components/container/container'
import { MusicDetailsInterface } from '@interfaces/song.interface'

export function HighlightsSection(props: {
    musics: MusicDetailsInterface[];
}) {
    return (
        <section className={styles.highlights}>

            <Container>
                <ScrollContainer className={styles.scrollContainer}>
                    {props.musics.map((music, index) => (
                        <Card music={music} key={index} />
                    ))}
                </ScrollContainer>
            </Container>

            <AdvertisingSection />
        </section>
    )
}
