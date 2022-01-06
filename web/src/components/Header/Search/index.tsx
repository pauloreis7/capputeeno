import { FiSearch } from 'react-icons/fi'

import { Container } from './styles'

export function Search() {
  return (
    <Container>
      <input 
        placeholder='Looking for what?'
      />

      <FiSearch />
    </Container>
  )
}