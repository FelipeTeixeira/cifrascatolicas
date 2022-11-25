import { CifraDetails } from '@components/CifraDetails'
import { Layout } from '@components/Layout'
import {Artist, ArtistListItem, Music} from '@types/Artist'
import axios from 'axios'
import { deburr } from 'lodash'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

const BASE_ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const REVALIDATE_TIME = IS_PRODUCTION ? 60 * 60 : 60 * 5

function wait(ml) {
  return new Promise((resolve) => setTimeout(resolve, ml))
}

export const getStaticProps: GetStaticProps = async (context) => {
  const artistSlug = context?.params?.artist
  const selectedCipherSlug = context?.params?.cipher
  const ENDPOINT = deburr(
    `https://api.musicasparamissa.com.br/cifrascatolicas/artistas/${artistSlug}/${selectedCipherSlug}`
  )
  let music
  let artist

  try {
    const musicResponse = await axios.get<Music>(ENDPOINT)
    music = musicResponse.data
    artist = music.artista
  } catch (e) {
    wait(500)

    console.log(`Error on Endpoint: ${ENDPOINT}`)
    console.log(e.message)
  }

  if (!artist) return { notFound: true }

  return {
    props: {
      artist,
      artistSlug,
      music,
      selectedCipherSlug
    }
    // revalidate: REVALIDATE_TIME
  }
}

export const getStaticPaths: GetStaticPaths<{
  artist: string
  cipher: string
}> = async () => {
  const baseResponse = await axios.get<ArtistListItem[]>(BASE_ENDPOINT)
  const artists = baseResponse.data
  const paths = []

  for await (const artistItem of artists) {
    const ENDPOINT = deburr(
      `https://api.musicasparamissa.com.br/cifrascatolicas/artistas/${artistItem.slug}`
    )

    try {
      const artistResponse = await axios.get<Artist>(ENDPOINT)
      const { musicas } = artistResponse?.data
      musicas?.map((music) => {
        const path = { params: { cipher: music.slug, artist: artistItem.slug } }
        paths.push(path)
      })
    } catch (e) {
      wait(500)

      console.log(`Error on Endpoint: ${ENDPOINT}`)
      console.log(e.message)
    }
  }

  return {
    paths,
    fallback: false
  }
}

function CifraPage({
  music
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <CifraDetails music={music} />
    </Layout>
  )
}

export default CifraPage
