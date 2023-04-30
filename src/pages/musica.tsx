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

export default function Musica() {
    const chords = ['Am', 'Bb2 ', 'C ', 'Dm ', 'F9 ', 'Bb2 ', 'C ', 'Am', 'F9'];
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

            <Header hideMobile={true} />
            <SubHeader />

            <main>
                <section className={styles.section}>
                    <Video />
                </section>

                <section className={styles.actions}>
                    <RadioGroup
                        selected={'Violão'}
                        options={['Violão', 'Guitarra', 'Cavaco', 'Teclado']}
                    />

                    <ToggleButton
                        onClick={(event: string) => console.log(event)}
                        options={['Original', 'Simplificada']}
                    />
                </section>

                <Chords options={chords} />

                <section className={`${styles.actions} ${styles.actions__counterButton}`}>
                    <CounterButton name='Tom' />
                    <CounterButton name='Letra' />
                </section>

                <section className={`${styles.section} ${styles.cipherSection}`}>
                    {product &&
                        <Cipher cipher={product.cifra} />
                    }
                </section>

                <Toolbar />

                <AdvertisingSection />
            </main >
        </>
    )
}
