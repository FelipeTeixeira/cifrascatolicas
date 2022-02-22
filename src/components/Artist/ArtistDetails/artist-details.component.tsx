import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  ListIcon,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react'
import { Artist } from '@types/Artist'
import NextLink from 'next/link'
// import { BsMusicNoteList } from 'react-icons/bs'
import { RiMusicLine } from 'react-icons/ri'
import { deburr } from 'lodash'

export interface DetailsProps {
  artist: Artist
}

const renderMusicList = ({ artist }: DetailsProps): React.ReactNode => {
  return artist.musicas.map((music) => {
    return (
      <>
        <ListItem key={music.slug}>
          <NextLink
            as={deburr(`/${artist.slug}/${music.slug}`)}
            href={deburr(`/${artist.slug}/[slug]`)}
            passHref
            key={deburr(`/${artist.slug}/${music.slug}`)}
          >
            <Text as="a">
              <ListIcon as={RiMusicLine} color="orange.500" />
              {music.nome}
            </Text>
          </NextLink>
        </ListItem>
      </>
    )
  })
}

export const ArtistDetails = ({ artist }: DetailsProps) => {
  return (
    <Box w="full">
      <Heading>
        <Flex
          alignItems="center"
          justifyContent="flex-start"
        >
          <Avatar
            size={'lg'}
            name={artist.nome}
            src={`https://cifrascatolicas.com.br/imagens/${artist.slug}.png`}
            bg="orange.400"
            color="white"
            mr = {2}
          />
          <Text
            as="h1"
            fontWeight="bold"
          >
            {artist.nome}
          </Text>
        </Flex>
      </Heading>
      <Divider m={4} />
      <Text>Músicas:</Text>
      <Divider m={2} />
      <OrderedList spacing={6}>{renderMusicList({ artist })}</OrderedList>
    </Box>
  )
}
