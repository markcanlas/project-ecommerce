import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
`;

const ImageContainer = styled.div`
  height: 280px;
  width: 195px;
  padding: 0 20px;
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
  margin-top: 40px;
  height: 220px;
  width: 200px;
`;

const Info = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
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
        <Info style={{ color: "red", fontSize: "20px" }}>{item.price}</Info>
      </InfoContainer>
      <Button>Order Now</Button>
    </Container>
  );
};

export default Product;
