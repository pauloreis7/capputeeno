import { HomeProduct } from '../HomeProduct'

import { Container } from "./styles";

export function HomeProductsList() {
  return (
    <Container>
      <HomeProduct 
        poster='https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg'
        title='Black Ring Mug'
        price='40.00'
      />

      <HomeProduct 
        poster='https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg'
        title='Outcast T-Shirt'
        price='20.00'
      />
      
      <HomeProduct 
        poster='https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg'
        title='Black Ring Mug'
        price='40.00'
      />

      <HomeProduct 
        poster='https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg'
        title='Outcast T-Shirt'
        price='20.00'
      />

      <HomeProduct 
        poster='https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg'
        title='Black Ring Mug'
        price='40.00'
      />

      <HomeProduct 
        poster='https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg'
        title='Outcast T-Shirt'
        price='20.00'
      />
    </Container>
  )
}