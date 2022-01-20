  import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden
  } from '@chakra-ui/react'
  import { ReactNode } from 'react'
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
  import { Logo } from '../Logo'

  const SocialButton = ({
    children,
    label,
    href
  }: {
    children: ReactNode
    label: string
    href: string
  }) => {
    return (
      <chakra.button
        bg={'orange.100'}
        color={'orange.900'}
        rounded={'full'}
        w={12}
        h={12}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: 'orange.500'
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }

  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'extrabold'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    )
  }

  export const Footer = () => {
    return (
      <Box>
        <Container as={Stack} maxW={'1xl'} p={10}>
              <Box
                display={'flex'}
                justifyContent={'center'}
              >
                <Logo />
              </Box>
              <Stack
                direction={'row'}
                spacing={6}
                align={'center'}
                justify={'center'}
                py={'1.2rem'}
              >
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
              <Stack
                direction={'row'}
                spacing={6}
                align={'baseline'}
                justify={'center'}>
              <Link href={'#'}>Envie Cifras</Link>
              <Link href={'#'}>Aviso Legal</Link>
              <Link href={'#'}>Política de Privacidade</Link>
              <Link href={'#'}>Contato</Link>
            </Stack>
          <Stack
            justify={'center'}>
          </Stack>
        </Container>
        <Container
          paddingBottom={'3rem'}
          paddingTop={'0rem'}>
            <Text
              fontSize={'md'}
              align={'center'}>
              © 2021 Cifras Católicas. Todos os direitos Reservados.
            </Text>
        </Container>
      </Box>
    )
  }
