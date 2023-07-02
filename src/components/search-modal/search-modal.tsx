import styles from './search-modal.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import Image from 'next/image'
import { SearchWithBackgroundIcon } from '@components/icons/search-with-background-icon'
import { Thumbnail } from '@components/thumbnail/thumbnail'
import Artista from '@public/teste/artista.png'
import { TagLink } from '@components/tag-link/tag-link'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { MouseEventHandler } from 'react'
import { CloseIcon } from '@components/icons/close-icon'
import { SearchInput } from '@components/search-input/search-input'

export function SearchModal(props: {
    isVisible: boolean;
    onClose: MouseEventHandler;
}) {
    return (
        <div className={`${styles.searchModal} ${props.isVisible ? styles.isActive : ''}`}>

            <button type='button' className={styles.closeButton} onClick={props.onClose}>
                <CloseIcon />
            </button>

            <Image src={Logo} alt='Logo do Cifras Católicas' className={styles.logo} />

            <SearchInput placeholder='Buscar música ou artista' />

            <ul className={styles.list}>
                <li>
                    <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                </li>
                <li>
                    <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                </li>
                <li>
                    <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                </li>
                <li>
                    <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                </li>
                <li>
                    <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                </li>
                <li>
                    <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                </li>
            </ul>

            <TagLink className={styles.accessAll}>
                Acessar todos
            </TagLink>

            <AdvertisingSection hasPadding={false} />

            <span className={styles.iconSearch}>
                <SearchWithBackgroundIcon />
            </span>

            <p className={styles.description}>
                Busque por músicas ou artistas que você deseja encontrar
            </p>
        </div>
    )
}

SearchModal.defaultProps = {
    isVisible: false
};
