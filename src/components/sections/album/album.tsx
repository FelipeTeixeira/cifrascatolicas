import styles from './album.module.scss'
import Album from '@public/teste/album.png'
import { ArtistCard } from '@components/artist-card/artist-card'

export function AlbumSection() {
    return (
        <section className={styles.section}>
            <ul className={styles.grid}>
                {[1, 2, 3, 4, 5, 6, 7].map((song, index) => (
                    <li key={index}>
                        <ArtistCard image={Album} />

                        <strong>
                            Santo Sacrifício
                        </strong>
                        <span>
                            Álbum 2016
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
