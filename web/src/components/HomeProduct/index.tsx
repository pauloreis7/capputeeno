import { Container, ProductInfo } from "./styles";

interface HomeProductProps {
  poster: string
  title: string
  price: string
}

export function HomeProduct({ 
  poster, 
  title, 
  price 
}: HomeProductProps) {
  return (
    <Container>
      <img src={poster} alt={title} />

      <ProductInfo>
        <h4>{title}</h4>

        <strong>$ {price}</strong>
      </ProductInfo>
    </Container>
  )
}