import { VStack, Spacer } from '@chakra-ui/react'
import { Highlights } from '@components/Highlights'
import { Newsletter } from '@components/Newsletter'
import { Ranking } from '@components/Ranking'

export interface MainProps {
  testId?: string
}

const Main = ({ testId }: MainProps) => {
  return (
    <VStack
      p={[0, 16]}
      spacing={[4, 16]}
      maxW={'6xl'}
      m={[4, '0 auto']}
      data-testid={testId}
    >
      <Highlights />
      <Spacer />
      <Ranking />
      <Spacer />
      <Newsletter />
    </VStack>
  )
}

export { Main }
