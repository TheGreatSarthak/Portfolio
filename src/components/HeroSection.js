import React from "react";
import styled from "styled-components";
import { Bio } from "../data/cosntants";
import Typewriter from "typewriter-effect";
import HeroImg from "../images/desk_profile.jpg";
import HeroBgAnimation from "./HeroBgAnimation/HeroBgAnimation";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
`;
const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  overflow: hidden;
  width: 600px;
  height: 600px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media screen and (max-width: 960px) {
    padding: 0px 0px;
    justify-content: center;
    max-height: 500px;
    max-width: 500px;
  }
  @media screen and (max-width: 640px) {
    max-height: 350px;
    max-width: 350px;
  }
`;
const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-left: 80px;
  @media screen and (max-width: 960px) {
    margin-left: 0;
    order: 1;
    margin-bottom: 80px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  gap: 12px;
  display: flex;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;
const Span = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
const SubTilte = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary + 95};
  line-height: 32px;
  margin-bottom: 42px;
  @media screen and (max-width: 960px) {
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }
  @media screen and (max-width: 640px) {
    font-size: 18px;
    padding: 12px 0;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primary};
  @media screen and (max-width: 960px) {
    position: relative;
    max-height: 400px;
    max-width: 400px;
  }
  @media screen and (max-width: 640px) {
    max-height: 280px;
    max-width: 280px;
  }
`;
export const Hero = () => {
  return (
      <HeroContainer id="about">
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am
              <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTilte>{Bio.description}</SubTilte>
            <ResumeButton href={Bio.resume} target="_blank">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <HeroBg>
              <HeroBgAnimation />
            </HeroBg>
            <Image src={HeroImg} alt="Hero" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
  );
};
