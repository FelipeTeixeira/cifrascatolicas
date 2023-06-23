import styles from './playlist.module.scss'
import { CircleButton } from '@components/circle-button/circle-button'
import { ShareIcon } from '@components/icons/share-icon'
import { PlaylistIcon } from '@components/icons/playlist-icon'
import Artista2 from '@public/teste/artista-2.png'
import Image from 'next/image'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'


export function PlaylistSection() {
    return (
        <Section style={styles.playlist}>
            <Container hasSidebar={true}>
                <ul>
                    {Array.from(Array(10)).map((song, index) => (
                        <li className={styles.soung} key={index}>
                            <Image src={Artista2} alt='Frei Gilson' className={styles.albumImage} />

                            <p>
                                {song}- Eu te levantarei
                            </p>

                            <CircleButton onClick={() => alert('teste')} hasBorder={false}>
                                <PlaylistIcon />
                            </CircleButton>

                            <CircleButton onClick={() => alert('teste')} color='white'>
                                <ShareIcon />
                            </CircleButton>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}
