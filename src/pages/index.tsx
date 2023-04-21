import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Banner from '@public/banner.jpg'
import { Header } from '@components/header/header'
import { MostAccessed } from '@sections/home/most-accessed/most-accessed'
import { Highlights } from '@sections/home/highlights/highlights'
import { Repertoire } from '@sections/home/repertoire/repertoire'
import { Artists } from '@/components/sections/home/artists/artists'

export default function Home() {
    return (
        <>
            <Head>
                <title>Cifras Católicas</title>
                <meta name="description" content="Todas as músicas católicas reunidas para você tocar!" />
            </Head>

            <Header />

            <main>
                <section>
                    <h1 className={styles.title}>
                        Todas as músicas católicas reunidas para você tocar!
                    </h1>

                    <Image src={Banner} alt='' priority />
                </section>

                <Highlights />
                <MostAccessed />
                <Repertoire />
                <Artists />
            </main>
        </>
    )
}
