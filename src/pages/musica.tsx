// TODO Alterar depois
async function fetchTeste() {
    const res = await fetch(`api/teste`);
    const data = await res.json();
    return data;
}

import Head from 'next/head'
import styles from '@styles/musica.module.scss'
import { Header } from '@components/header/header'
import { SubHeader } from '@components/subheader/subheader'
import { Video } from '@components/video/video'
import { ToggleButton } from '@components/toggle-button/toggle-button'
import { CounterButton } from '@components/counter-button/counter-button'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { Toolbar } from '@components/toolbar/toolbar'
import { useEffect, useState } from 'react';
import { Cipher } from '@components/cipher/cipher';
import { Chords } from '@components/chords/chords';
import { RadioGroup } from '@components/radio-group/radio-group';
import { Footer } from '@components/footer/footer';

export default function Musica() {
    const chords = ['Am', 'Bb2 ', 'C ', 'Dm ', 'F9 ', 'Bb2 ', 'C '];
    const [product, setProduct] = useState<any>();

    useEffect(() => {
        fetchTeste().then((response: any) => {
            setProduct(response);
        });
    }, []);

    return (
        <>
            <Head>
                <title>Cifras Católicas - Água viva - Adriana Gil</title>
                <meta name="description" content="Água viva - Adriana Gil" />
            </Head>

            <Header />
            <SubHeader />

            <main className={styles.main}>
                <div className={styles.tools}>
                    <div className={styles.contentTools}>
                        <section className={styles.section}>
                            <Video />
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
                            Água viva
                            <strong>Adriana Gil</strong>
                        </h1>

                        {product &&
                            <Cipher cipher={product.cifra} />
                        }
                    </section>
                    <AdvertisingSection hasPadding={false} />
                </div>
            </main>
            <Footer />
        </>
    )
}
