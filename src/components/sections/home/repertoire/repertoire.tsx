import styles from './repertoire.module.scss'
import Repertorio1 from '@public/teste/repertorio-1.png'
import Repertorio2 from '@public/teste/repertorio-2.png'
import { TagLink } from '@/components/tag-link/tag-link'
import { SectionTitle } from '@/components/section-title/section-title'
import { ScrollContainer } from '@/components/scroll-container/scroll-container'
import { RepertoireCard } from '@/components/repertoire-card/repertoire-card'

export function Repertoire() {
    return (
        <section className={styles.repertoire}>
            <SectionTitle style={styles.title}>
                Repertórios para você
            </SectionTitle>

            <TagLink style={styles.viewMore}>
                Mais
            </TagLink>

            <ScrollContainer maxWidth='134px'>
                <RepertoireCard image={Repertorio2} />
                <RepertoireCard image={Repertorio1} />
                <RepertoireCard image={Repertorio2} />
            </ScrollContainer>
        </section>
    )
}
