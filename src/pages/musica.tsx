type ArtistaType = {
    info: string;
    nome: string;
    slug: string;
};

type SongType = {
    artista: ArtistaType;
    cifra: string;
    info: string;
    nome: string;
    slug: string;
    video: string;
};

export const getStaticProps: GetStaticProps<{
    song: SongType
}> = async () => {
    const res = await fetch('http://localhost:3000/api/teste')
    const song = await res.json()
    return { props: song }
}

export function getVideoId(video: string): string {
    const videoId = video.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    const versaoString = ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
    return versaoString;
}

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
import { GetStaticProps } from 'next';

export default function Musica(props: SongType): JSX.Element {
    const { artista, cifra, info, nome, slug, video } = props;
    const chords = ['Am', 'Bb2 ', 'C ', 'Dm ', 'F9 ', 'Bb2 ', 'C '];

    return (
        <>
            <Head>
                <title>{`${nome.trim()} - ${artista.nome} | Cifras Católicas`}</title>
                <meta name="description" content={`${nome} - ${artista.nome}`} />
            </Head>

            <SubHeader />

            <main className={styles.main}>
                <div className={styles.tools}>
                    <div className={styles.contentTools}>
                        <section className={styles.section}>
                            <Video songName={nome} videoId={getVideoId(video)} />
                        </section>

                        <section className={`${styles.actions} ${styles.border}`}>
                            <RadioGroup
                                selected={'Violão'}
                                options={['Violão', 'Guitarra', 'Cavaco', 'Teclado']}
                            />

                            <ToggleButton
                                onClick={(event: string) => console.log(event)}
                                options={['Original', 'Simplificada']}
                            />
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

                <div className={styles.content}>
                    <section className={`${styles.section} ${styles.cipherSection}`}>
                        <h1 className={styles.title}>
                            {nome}
                            <strong>{artista.nome}</strong>
                        </h1>

                        {cifra &&
                            <Cipher cipher={cifra} />
                        }
                    </section>
                    <AdvertisingSection hasPadding={false} />
                </div>
            </main>
        </>
    )
}
