import styled from "styled-components";
import { popularProducts } from "../data";
import PopularProduct from "./PopularProduct";

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

const PopularProducts = () => {
  return (
    <Container>
      <Header>Popular Manga</Header>
      <Wrapper>
        {popularProducts.map((item) => (
          <PopularProduct item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default PopularProducts;
