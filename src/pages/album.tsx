import Head from 'next/head'
import styles from '@styles/album.module.scss'
import { Header } from '@components/header/header'
import { SubHeader } from '@components/subheader/subheader'
import AlbumImage from '@public/teste/album.png'
import { PlaylistSection } from '@components/sections/playlist/playlist'
import { ArtistCard } from '@components/artist-card/artist-card'

export default function Album() {
    return (
        <>
            <Head>
                <title>Cifras Católicas - Eu Vou Crer em Ti</title>
                <meta name="description" content="Eu Vou Crer em Ti" />
            </Head>

            <Header/>
            <SubHeader />

            <main>
                <section className={styles.section}>
                    <ArtistCard image={AlbumImage} />

                    <div>
                        <h1 className={styles.title}>
                            Eu Vou Crer em Ti
                        </h1>

                        <p className={styles.detail}>
                            Álbum
                            <span>
                                Frei Gilson
                            </span>
                        </p>

                        <p className={styles.detail}>
                            10 músicas
                            <span>
                                32 minutos
                            </span>
                        </p>
                    </div>

                </section>
                <PlaylistSection />
            </main >
        </>
    )
}
