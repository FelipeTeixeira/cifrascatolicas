import { Box, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { Artist } from '@types/Artist'
import { chain, head } from 'lodash'
import { ArtistItem } from '../ArtistItem'

export interface ArtistListProps {
  artists: Artist[]
}

interface AlphabetGrouped {
  letter: string
  artists: Artist[]
}



function isNumeric(str: string | undefined) {
  if (!str) return
  return /^\d+$/.test(str)
}

const _groupByName = (artists: Artist[]): AlphabetGrouped[] => {
  const result = chain(artists)
    .groupBy((o) => {
      const letter = head(o.nome)?.toUpperCase()
      const IS_NUMBER = isNumeric(letter) || !letter
      return IS_NUMBER ? 'Número' : letter
    })
    .map((artists, letter) => ({ letter, artists }))
    .value()

  return result
}

export const ArtistList = ({ artists }: ArtistListProps) => {
  const alphabetGrouped = _groupByName(artists)
  const color = useColorModeValue('gray.600', 'white')

  return (
    <Box flex="1" w="full">
      <Heading m={2} fontSize="4xl" fontWeight="bold" color={color}>
        Artistas por ordem Alfabética:
      </Heading>
      {alphabetGrouped?.map(({ artists, letter }, index) => {
        return (
          <Box key={index}>
            <Heading m={2} fontSize="4xl" fontWeight="bold" color={color}>
              {letter}
            </Heading>

            <SimpleGrid columns={[1, 2, 3]} p={4} spacing={4}>
              {artists?.map((artist, index) => (
                <ArtistItem {...artist} key={artist.slug + index} />
              ))}
            </SimpleGrid>
          </Box>
        )
      })}
    </Box>
  )
}
