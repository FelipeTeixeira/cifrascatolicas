import styles from '@styles/busca.module.scss'
import { SubHeader } from '@components/subheader/subheader'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'
import { GetServerSideProps } from 'next'
import { setPreviousUrl } from '@utils/set-previous-url.util'
import { MetaTags } from '@components/meta-tags/meta-tags'
import Script from 'next/script'
import { SearchWithBackgroundIcon } from '@components/icons/search-with-background-icon'

type Props = {
    previousUrl: string;
    hideMenuMobile: boolean;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const previousUrl = setPreviousUrl(context, '/');
    const hideMenuMobile = true;

    return { props: { previousUrl, hideMenuMobile } }
}

export default function Busca(props: Props): JSX.Element {
    return (
        <>
            <MetaTags title="Busca - Cifras Católicas" />
            <SubHeader previousUrl={props.previousUrl} showSearch={false} />

            <main>
                <Section>
                    <Container>
                        <div className="search-google">
                            <div className="gcse-search"></div>
                        </div>

                        <span className={styles.iconSearch}>
                            <SearchWithBackgroundIcon />
                        </span>

                        <p className={styles.description}>
                            Busque por músicas ou artistas que
                            você deseja encontrar
                        </p>

                        <Script async src={`https://cse.google.com/cse.js?cx=a4ba922f5a20c3e9f&v=${Math.random() * 999}`} onLoad={() => {
                            setTimeout(() => {
                                const input = document.getElementById('gsc-i-id1') as HTMLInputElement;
                                input.placeholder = 'Buscar música ou artista';
                            }, 500);
                        }} />
                    </Container>
                </Section>
            </main >
        </>
    )
}
