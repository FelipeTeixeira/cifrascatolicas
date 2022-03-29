import { Spacer } from '@chakra-ui/react'
import { ArtistList } from '@components/Artist'
import { Highlights } from '@components/Highlights'
import { Newsletter } from '@components/Newsletter'
import { ArtistListItem } from '@types/Artist'

export interface MainProps {
  artists?: ArtistListItem[]
}

const Main = ({ artists }: MainProps) => {
  return (
    <>
      {/* <Highlights /> */}
      <Spacer />
      <ArtistList artists={artists} />
      <Spacer />
      {/* <Newsletter /> */}
    </>
  )
}

export { Main }
