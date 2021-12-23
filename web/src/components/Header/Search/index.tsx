import { FiSearch } from 'react-icons/fi'

import { Container } from './styles'

export function Search() {
  return (
    <Container>
      <input 
        placeholder='Looking for something specific?'
      />

      <FiSearch size={'1.5rem'} />
    </Container>
  )
}