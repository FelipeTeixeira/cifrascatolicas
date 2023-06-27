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
import { getSong } from '@services/artist.service';
import { getVideoId } from '@utils/get-video-id.util';
import { SongDetailsInterface } from '@interfaces/artist.interface'
import { setPreviousUrl } from '@utils/set-previous-url.util'
import { Section } from '@components/section/section'

type Props = {
    song: SongDetailsInterface;
    previousUrl: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const artist = context.params?.artist as string;
    const selectedSong = context.params?.song as string;
    const song = await getSong(artist, selectedSong);
    const previousUrl = setPreviousUrl(context, context.resolvedUrl.split('/').slice(0, -1).join('/'));

    return {
        props: {
            song,
            previousUrl
        }
    }
}

export default function Musica(props: Props): JSX.Element {
    const { artista, cifra, nome, video } = props.song;
    const chords = ['Am', 'Bb2 ', 'C ', 'Dm ', 'F9 ', 'Bb2 ', 'C '];

    return (
        <>
            <Head>
                <title>{`${nome.trim()} - ${artista.nome} | Cifras Católicas`}</title>
                <meta name="description" content={`${nome} - ${artista.nome}`} />
            </Head>

            <SubHeader previousUrl={props.previousUrl} />

            <main className={styles.main}>
                <div className={styles.content}>
                    <Section style={styles.cipherSection}>
                        <h1 className={styles.title}>
                            {nome}
                            <strong>{artista.nome}</strong>
                        </h1>

                        {cifra &&
                            <Cipher cipher={cifra} />}
                    </Section>
                    <AdvertisingSection hasPadding={false} />
                </div>

                <div className={styles.tools}>
                    <div className={styles.contentTools}>

                        {video &&
                            <Section>
                                <Video songName={nome} videoId={getVideoId(video)} />
                            </Section>
                        }

                        <section className={`${styles.actions} ${styles.border}`}>
                            <RadioGroup
                                selected={'Violão'}
                                options={['Violão', 'Guitarra', 'Cavaco', 'Teclado']} />

                            <ToggleButton
                                onClick={(event: string) => console.log(event)}
                                options={['Original', 'Simplificada']} />
                        </section>

                        <section>
                            <Chords options={chords} className={styles.chords} />
                        </section>

                        <section className={styles.counterButtonSection}>
                            <section className={styles.border}>
                                <span className={styles.label}>Ajuste o tom</span>
                                <CounterButton name='Tom' />
                            </section>

                            <section className={styles.border}>
                                <span className={styles.label}>Ajuste o tamanho da letra</span>
                                <CounterButton name='Letra' />
                            </section>
                        </section>

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
