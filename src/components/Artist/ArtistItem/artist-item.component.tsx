import {
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  useColorModeValue,
  VStack,
  LinkBox,
  Link
} from '@chakra-ui/react'
import { Artist } from '@types/Artist'
import NextLink from 'next/link'

export const ArtistItem = ({ slug, nome, info, imagem }: Artist) => {
  return (
    <NextLink
      as={`/artistas/${slug}`}
      href={`/artistas/[slug]`}
      passHref
      key={`/artistas/${slug}`}
    >
      <Link style={{ textDecoration: 'none' }}>
        <Flex
          w={['full']}
          h={100}
          alignItems="center"
          justifyContent="center"
          shadow="lg"
          rounded="lg"
          bg={useColorModeValue('white', 'orange.100')}
          _hover={{ bg: 'orange.50' }}
          role="group"
          colorScheme="orange"
          cursor="pointer"
        >
          <Box w={1 / 3}>
            <Center>
              <Avatar
                size={'lg'}
                name={nome}
                src={imagem}
                borderColor="papayawhip"
                borderWidth={2}
                bg="orange.400"
              ></Avatar>
            </Center>
          </Box>
          <Box w={2 / 3}>
            <VStack p={[1, 4]} alignItems="center">
              <Text
                as="h1"
                fontSize="sm"
                fontWeight="bold"
                color={'orange.500'}
              >
                {nome}
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Link>
    </NextLink>
  )
}
