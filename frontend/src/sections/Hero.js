import React from "react";
import styled from "styled-components";

const bgImgSrc =
  "https://images.unsplash.com/photo-1514771206769-bd41b0138cc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("${bgImgSrc}") no-repeat center center fixed;
  filter: brightness(0.1);
`;

const HeroSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HeroContent = styled.div`
  z-index: 1;
  max-width: 80%;
  text-align: center;
`;

const HeroButton = styled.a`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  padding: 18px 36px;
  outline: 0;
  border: 2px solid #f706cf;
  background: transparent;
  color: #f706cf;
  border-radius: 2px;
  font-size: 24px;
  text-shadow: rgba(247, 6, 207, 0.95) 0 0 40px;
  box-shadow: rgba(247, 6, 207, 0.65) 0 0 10px;

  &:hover {
    box-shadow: rgba(247, 6, 207, 0.95) 0 0 40px;
  }

  &:active {
    color: white;
    border-color: white;
    text-shadow: white 0 0 40px;
    box-shadow: white 0 0 40px;
  }
`;

const Title = styled.h1`
  color: #f706cf;
  text-align: center;
  font-size: 48px;
  text-shadow: rgba(247, 6, 207, 0.95) 0 0 40px;
`;

const Subtitle = styled.h4`
  text-align: center;
`;

export default () => (
  <HeroSection>
    <BgImg />
    <HeroContent>
      <Title>Plasma Bootstrap</Title>
      <Subtitle>
        A generator which provides a simple method of generating a Plasma node
        with add-ons.
      </Subtitle>
      <HeroButton href="#providers">generate now</HeroButton>
    </HeroContent>
  </HeroSection>
);
