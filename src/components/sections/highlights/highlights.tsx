import { Card } from '@components/card/card'
import styles from './highlights.module.scss'
import CifraSimplificada from '@public/teste/cifra-simplificada.png'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { ScrollContainer } from '@components/scroll-container/scroll-container'
import { Container } from '@components/container/container'

export function HighlightsSection() {
    return (
        <section className={styles.highlights}>
            <Container>
                <ScrollContainer style={styles.scrollContainer}>
                    <Card image={CifraSimplificada} />
                    <Card image={CifraSimplificada} />
                    <Card image={CifraSimplificada} />
                </ScrollContainer>
            </Container>

            <AdvertisingSection />
        </section>
    )
}
