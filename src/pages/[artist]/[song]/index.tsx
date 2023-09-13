import Head from 'next/head'
import styles from '@styles/musica.module.scss'
import { SubHeader } from '@components/subheader/subheader'
import { Video } from '@components/video/video'
import { ToggleButton } from '@components/toggle-button/toggle-button'
import { CounterButton } from '@components/counter-button/counter-button'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { Toolbar } from '@components/toolbar/toolbar'
import { Cipher } from '@components/cipher/cipher';
import { Chords } from '@components/chords/chords';
import { RadioGroup } from '@components/radio-group/radio-group';
import { GetServerSideProps } from 'next';
import { getSong, addVisits } from '@services/artist.service';
import { setPreviousUrl } from '@utils/set-previous-url.util'
import { Section } from '@components/section/section'
import { MusicDetailsInterface } from '@interfaces/song.interface'

type Props = {
    song: MusicDetailsInterface;
    previousUrl: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const artistSlug = context.params?.artist as string;
    const selectedSongSlug = context.params?.song as string;
    const song = await getSong(artistSlug, selectedSongSlug);
    addVisits(artistSlug, selectedSongSlug);
    const previousUrl = setPreviousUrl(context, context.resolvedUrl.split('/').slice(0, -1).join('/'));

    return {
        props: {
            song,
            previousUrl
        }
    }
}

export default function Musica(props: Props): JSX.Element {
    const { artista, cifra, nome, code_video } = props.song;
    const pageTitle = `${nome.trim()} - ${artista.nome}`;
    const chords = ['Am', 'Bb2 ', 'C ', 'Dm ', 'F9 ', 'Bb2 ', 'C '];

    return (
        <>
            <Head>
                <title>{`${pageTitle} | Cifras Católicas`}</title>
                <meta name="description" content={pageTitle} />
            </Head>

            <SubHeader previousUrl={props.previousUrl} />

            <main className={styles.main}>
                <div className={styles.content}>
                    <Section className={styles.cipherSection}>
                        <h1 className={styles.title}>
                            {nome}
                            <strong>{artista.nome}</strong>
                        </h1>

                        {cifra &&
                            <Cipher cipher={cifra} />}
                    </Section>
                    <AdvertisingSection className={styles.cipherSection} />
                </div>

                <div className={styles.tools}>
                    <div className={styles.contentTools}>

                        {code_video &&
                            <Section>
                                <Video
                                    pageTitle={pageTitle}
                                    songName={nome}
                                    videoId={code_video}
                                />
                            </Section>
                        }

                        <Section className={`${styles.actions} ${styles.border}`}>
                            <RadioGroup
                                selected={'Violão'}
                                options={['Violão', 'Guitarra', 'Cavaco', 'Teclado']} />

                            <ToggleButton
                                onClick={(event: string) => console.log(event)}
                                options={['Original', 'Simplificada']} />
                        </Section>

                        <section>
                            <Chords options={chords} className={styles.chords} />
                        </section>

                        <Section className={styles.counterButtonSection}>
                            <section className={styles.border}>
                                <span className={styles.label}>Ajuste o tom</span>
                                <CounterButton name='Tom' />
                            </section>

                            <section className={styles.border}>
                                <span className={styles.label}>Ajuste o tamanho da letra</span>
                                <CounterButton name='Letra' />
                            </section>
                        </Section>

                        <section className={styles.border}>
                            <span className={styles.label}>Ative a auto rolagem</span>
                            <Toolbar />
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
