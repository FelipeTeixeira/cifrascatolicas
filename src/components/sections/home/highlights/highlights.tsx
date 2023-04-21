import { Card } from '@/components/card/card'
import styles from './highlights.module.scss'
import CifraSimplificada from '@public/teste/cifra-simplificada.png'
import { Advertising } from '@/components/advertising/advertising'
import { ScrollContainer } from '@/components/scroll-container/scroll-container'

export function Highlights() {
    return (
        <section className={styles.highlights}>
            <ScrollContainer style={styles.scrollContainer} hasPadding={true}>
                <Card image={CifraSimplificada} />
                <Card image={CifraSimplificada} />
                <Card image={CifraSimplificada} />
            </ScrollContainer>

            <Advertising />
        </section>
    )
}
