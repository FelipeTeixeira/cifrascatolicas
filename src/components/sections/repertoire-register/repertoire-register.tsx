import { ChangeEvent, useEffect, useState } from 'react';
import styles from './repertoire-register.module.scss'
import { Button } from '@components/button/button';
import { SongSelect } from '@components/song-select/song-select';
import { MusicDetailsInterface, MusicResponseInterface } from '@interfaces/song.interface';
import { setTimeout } from 'timers';
import { bffGetAllMusics } from '@services/bff.service';
import { SearchInput } from '@components/search-input/search-input';
import { Loading } from '@components/loading/loading';
import { RepertoireListSection } from '../repertoire-list/repertoire-list';

export function RepertoireRegisterSection(props: {
    onCreateRepertoire: Function;
    onSelectSong: Function;
}) {
    const [stepperVisible, setStepperVisible] = useState<'first' | 'second'>('first');
    const [playlistName, setPlaylistName] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [songs, setSongs] = useState<MusicResponseInterface>();
    const [isLoading, setIsLoading] = useState(false);
    const [playlist, setPlaylist] = useState<MusicDetailsInterface[]>([]);

    useEffect(() => {
        let cancelRequest = false;

        const fetchData = async () => {
            try {
                setIsLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 500));

                if (!cancelRequest) {
                    const response = await bffGetAllMusics(searchValue, 1, 0, 10);
                    setSongs(response);
                    setIsLoading(false);
                }

            } catch (error) {
                setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            cancelRequest = true;
        };
    }, [searchValue]);

    const handlePlaylistChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setPlaylistName(newValue);
    };

    return (
        <ul className={styles.stepperContainer}>

            <li className={`${styles.stepperItem} ${stepperVisible === 'first' ? '' : styles.hide}`}>
                <h2 className={styles.title}>
                    Nome do seu repertório
                </h2>

                <p className={styles.description}>
                    Dê um nome para o repertório de músicas que você está criando.
                </p>

                <input type="text" placeholder='Insira o nome' autoComplete='off' value={playlistName} onChange={handlePlaylistChange} />

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

                <SearchInput placeholder='Buscar música' onChange={setSearchValue} />


                {/* preciso esconder da lista as musicas que ja foram adicioandas */}
                <div className={styles.containerSong}>
                    {isLoading ?
                        <Loading className={styles.loading} />
                        :
                        songs?.data?.length ?
                            <>
                                <ul>
                                    {songs.data.map((song, index) => (
                                        <li key={index}>
                                            <SongSelect
                                                song={song}
                                                onSelectDetails={() => props.onSelectSong(song)}
                                                onAddPlaylist={() => {
                                                    setPlaylist([...playlist, song]);
                                                    songs.data.splice(index, 1);
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </>
                            :

                            <>
                                {searchValue ? <p className={styles.notFound}>Nenhuma música encontrada</p> : null}
                            </>

                    }


                    {playlist.length ?
                        <>
                            <p className={styles.description}>
                                Músicas selecionadas
                            </p>

                            <ul>
                                {playlist.map((song, index) => (
                                    <li key={index}>
                                        <SongSelect
                                            song={song}
                                            showSelectDetails={false}
                                            showAddPlaylist={false}
                                            showRemove={true}
                                        />
                                    </li>
                                ))}
                            </ul>

                            <strong className={styles.totalSong}>
                                {playlist.length} músicas escolhidas
                            </strong>
                        </> : null
                    }
                </div>

                <Button onClick={() => props.onCreateRepertoire()}>
                    Criar repertório
                </Button>
            </li>
        </ul>
    )
}
