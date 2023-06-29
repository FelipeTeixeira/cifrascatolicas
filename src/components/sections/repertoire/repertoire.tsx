import styles from './repertoire.module.scss'
import Repertorio1 from '@public/teste/repertorio-1.png'
import Repertorio2 from '@public/teste/repertorio-2.png'
import { TagLink } from '@components/tag-link/tag-link'
import { SectionTitle } from '@components/section-title/section-title'
import { ScrollContainer } from '@components/scroll-container/scroll-container'
import { RepertoireCard } from '@components/repertoire-card/repertoire-card'
import { Container } from '@components/container/container'

export function RepertoireSection() {
    return (
        <section className={styles.repertoire}>
            <Container>
                <SectionTitle style={styles.title}>
                    Repertórios para você
                </SectionTitle>

                <TagLink style={styles.viewMore}>
                    Mais
                </TagLink>

                <ScrollContainer style={styles.scrollContainer}>
                    <RepertoireCard image={Repertorio2} />
                    <RepertoireCard image={Repertorio1} />
                    <RepertoireCard image={Repertorio2} />
                    <RepertoireCard image={Repertorio2} />
                    <RepertoireCard image={Repertorio2} />
                </ScrollContainer>
            </Container>
        </section>
    )
}
