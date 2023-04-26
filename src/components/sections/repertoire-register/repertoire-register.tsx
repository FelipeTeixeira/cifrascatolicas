import { useState } from 'react';
import styles from './repertoire-register.module.scss'
import { Button } from '@components/button/button';
import { SearchInput } from '@components/search-input/search-input';
import { MusicSelect } from '@components/music-select/music-select';
import { Song } from '@interfaces/song.interface';

export function RepertoireRegisterSection(props: {
    onCreateRepertoire: Function;
    onSelectMusic: Function;
    songs: Song[];
}) {
    const [stepperVisible, setStepperVisible] = useState<'first' | 'second'>('first');

    return (
        <ul className={styles.stepperContainer}>

            <li className={`${styles.stepperItem} ${stepperVisible === 'first' ? '' : styles.hide}`}>
                <h2 className={styles.title}>
                    Nome do seu repertório
                </h2>

                <p className={styles.description}>
                    Dê um nome para o repertório de músicas que você está criando.
                </p>

                <input type="text" placeholder='Insira o nome' autoComplete='off' />

                <Button onClick={() => setStepperVisible('second')}>
                    Continuar
                </Button>
            </li>

            <li className={`${styles.stepperItem} ${styles.second} ${stepperVisible === 'second' ? '' : styles.hide}`}>
                <h2 className={styles.title}>
                    Músicas do seu repertório
                </h2>

                <p className={styles.description}>
                    Busque pelas músicas que você deseja adicionar no seu repertório
                </p>

                <SearchInput placeholder='Buscar música' />

                <ul className={styles.containerMusic}>
                    {props.songs.map((song, index) => (
                        <li key={index}>
                            <MusicSelect
                                song={song}
                                onSelectMusic={() => props.onSelectMusic(song)} />
                        </li>
                    ))}
                </ul>

                <strong className={styles.totalMusic}>
                    {props.songs.length} músicas escolhidas
                </strong>

                <Button onClick={() => props.onCreateRepertoire()}>
                    Criar repertório
                </Button>
            </li>
        </ul>
    )
}
