import { Card } from '@components/card/card'
import styles from './highlights.module.scss'
import CifraSimplificada from '@public/teste/cifra-simplificada.png'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { ScrollContainer } from '@components/scroll-container/scroll-container'

export function HighlightsSection() {
    return (
        <section className={styles.highlights}>
            <ScrollContainer style={styles.scrollContainer} hasPadding={true}>
                <Card image={CifraSimplificada} />
                <Card image={CifraSimplificada} />
                <Card image={CifraSimplificada} />
            </ScrollContainer>

            <AdvertisingSection />
        </section>
    )
}
