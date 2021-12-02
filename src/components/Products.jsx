import styled from "styled-components";
import Product from "./Product";
import { shonenProducts } from "../data";

const Container = styled.div`
  margin-top: 3rem;
`;

const Header = styled.h1`
  font-size: 32px;
  padding-left: 20px;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      <Header>Shonen</Header>
      <Wrapper>
        {shonenProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
