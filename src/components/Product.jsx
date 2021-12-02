import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px 0;
  /* min-width: 220px; */
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  flex-direction: column;
  border: 1px solid #a5d8ff;
`;

const ImageContainer = styled.div`
  height: 280px;
  width: 200px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  padding-top: 20px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  height: 220px;
  width: 200px;
`;

const Info = styled.p`
  color: red;
  margin-bottom: 5px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #1976d2;
  color: #d1e4f6;
  cursor: pointer;
  font-weight: 600;
  width: 80%;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        {" "}
        <Image src={item.img} />
      </ImageContainer>
      <InfoContainer>
        <Info>{item.title}</Info>
        <Info>{item.price}</Info>
      </InfoContainer>
      <Button>Order Now</Button>
    </Container>
  );
};

export default Product;
