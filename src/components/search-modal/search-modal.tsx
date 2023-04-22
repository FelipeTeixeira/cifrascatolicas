import styles from './search-modal.module.scss'
import Logo from '@public/cifras-catolicas-logo.png'
import Image from 'next/image'
import { SearchIcon } from '../icons/search-icon'
import { SearchWithBackgroundIcon } from '../icons/search-with-background-icon'
import { Thumbnail } from '../thumbnail/thumbnail'
import Artista from '@public/teste/artista.png'
import { TagLink } from '../tag-link/tag-link'
import { AdvertisingSection } from '../sections/advertising/advertising'
import { MouseEventHandler } from 'react'

export function SearchModal(props: {
    isVisible: boolean;
    onClose: MouseEventHandler;
}) {
    return (
        <div className={`${styles.searchModal} ${props.isVisible ? styles.isActive : ''}`}>
            <Image src={Logo} alt='Logo do Cifras Católicas' priority className={styles.logo} />

            <button type='button' className={styles.closeButton} onClick={props.onClose}>
                X
            </button>

            <div className={styles.formGroup}>
                <span className={styles.formGroup__icon}>
                    <SearchIcon width={20} height={20} />
                </span>
                <input type="search" placeholder='Buscar música ou artista' autoComplete='off' />
            </div>

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

            <TagLink style={styles.accessAll}>
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
