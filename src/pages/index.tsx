import { Layout, Main } from 'components'
import {  GetStaticProps,InferGetStaticPropsType } from 'next'
import axios from 'axios'
import { ArtistListItem } from '@types/Artist'

const BASE_ENDPOINT = `https://api.musicasparamissa.com.br/cifrascatolicas/artistas`

export const getStaticProps: GetStaticProps = async (context) => {

  const baseResponse = await axios.get<ArtistListItem[]>(BASE_ENDPOINT)
  const artists = baseResponse.data

  return {
    props: {
      artists
    }
    // revalidate: REVALIDATE_TIME
  }
}

const Index = ({
  artists
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout>
    <Main artists={artists}/>
  </Layout>
)

export default Index
