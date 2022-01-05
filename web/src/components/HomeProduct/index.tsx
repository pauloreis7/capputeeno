import { Container, ProductInfo } from "./styles";

export function HomeProduct() {
  return (
    <Container>
      <img src="https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg" alt="img" />

      <ProductInfo>
        <h4>Rustic ceramic mug</h4>

        <strong>$ 40.00</strong>
      </ProductInfo>
    </Container>
  )
}