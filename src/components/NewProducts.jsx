import { useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { newReleaseProducts } from "../data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const Container = styled.div`
  margin: 3rem 3rem 0;
`;

const WholeWrapper = styled.div`
  max-width: 1460px;
  position: relative;
  margin: 1rem auto;
  overflow: hidden;
`;

const Header = styled.h1`
  font-size: 32px;
`;

const Wrapper = styled.div`
  transition: ease 1.1s;
  white-space: nowrap;
  transform: translateX(${(props) => props.slideIndex * -50}%);
`;

const Slide = styled.div`
  display: inline-block;
  border: 1px solid #a5d8ff;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "5px"};
  right: ${(props) => props.direction === "right" && "5px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
  &:hover {
    background-color: black;
    color: white;
    opacity: 1;
  }
`;

const NewProducts = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Header>New Release</Header>
      <WholeWrapper>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {newReleaseProducts.map((item) => (
            <Slide key={item.id}>
              <Product item={item} key={item.id} />
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </WholeWrapper>
    </Container>
  );
};

export default NewProducts;
