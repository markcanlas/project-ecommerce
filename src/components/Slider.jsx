import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { sliderItems } from "../data";

const Container = styled.div`
  max-width: 1000px;
  position: relative;
  margin: 3rem auto;
  overflow: hidden;
`;
const SlideContainer = styled.div`
  display: inline-block;
  height: 350px;
  width: 100%;
`;

const Slide = styled.div`
  transition: ease 1000ms;
  white-space: nowrap;
`;

const Text = styled.div`
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;

const NumberText = styled.div`
  color: #555;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
`;

const Title = styled.h1`
  color: red;
  font-size: 70px;
`;
const Description = styled.p`
  color: #fff0f6;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  color: #d1e4f6;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  background-color: #1976d2;
  cursor: pointer;
  transform: translate(-28rem, 0);
  border-style: none;
`;

const DotContainer = styled.div`
  text-align: center;
`;

const Dot = styled.div`
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: ${(props) =>
    props.slides === props.index ? "#1976D2" : "#bbb"};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  cursor: pointer;
`;

const Image = styled("img")`
  height: 100%;
  width: 100%;
  filter: brightness(75%);
`;

const Slider = () => {
  const [slides, setSlides] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlides((prevIndex) =>
          prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
        ),
      3500
    );

    return () => {
      resetTimeout();
    };
  }, [slides]);

  return (
    <Container>
      <Slide style={{ transform: `translate3d(${-slides * 100}%, 0, 0)` }}>
        {sliderItems.map((item) => {
          return (
            <SlideContainer key={item.id}>
              <NumberText>
                {item.text} / {sliderItems.length}
              </NumberText>
              <Image src={item.img} />
              <Text>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Buy Now!</Button>
              </Text>{" "}
              <br />
            </SlideContainer>
          );
        })}
      </Slide>

      <DotContainer>
        {sliderItems.map((item, index) => {
          return (
            <Dot
              key={item.id}
              onClick={() => setSlides(index)}
              index={index}
              slides={slides}
            />
          );
        })}
      </DotContainer>
    </Container>
  );
};

export default Slider;
