import Head from 'next/head'
import styles from '@styles/repertorio.module.scss'
import { Header } from '@components/header/header'
import { Button } from '@components/button/button'
import { RepertoireSection } from '@sections/repertoire/repertoire'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { AddIcon } from '@components/icons/add-icon'

export default function Repertorio() {
    return (
        <>
            <Head>
                <title>Cifras Católicas - Criar repertório</title>
                <meta name="description" content="Crie seu repertório e salve as músicas para tocar no offline" />
            </Head>

            <Header />

            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles.title}>
                        Crie seu repertório e salve as músicas para tocar no offline
                    </h1>

                    <Button>
                        <AddIcon fill='#fff' width={30} height={30} />
                        Criar repertório
                    </Button>
                </section>

                <RepertoireSection />
                <AdvertisingSection />

            </main>
        </>
    )
}
