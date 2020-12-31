import React from "react"
// import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import MockupAnimtaion from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design
            <br />
            and code <span>React</span> apps
          </Title>
          <Description>
            Don’t skip design. Learn design and code, by building real apps,
            collaborate and solving product UI problems.
          </Description>
          <PurchaseButton
            title="Start learning"
            subtitle="120+ hours fo video"
          />
        </TextWrapper>
        <MockupAnimtaion />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  /* from { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0px); filter: blur(0px); }  */

  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  /* 50% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); } */
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); } 
`

const Wrapper = styled.div`
  /* background: linear-gradient(180deg, #4316db 0%, #9076e7 100%); */
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    padding: 150px 20px 250px;
    gap: 60px;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  // * -> Seleciona todos os elementos filhos e sub itens tb
  // > * -> Seleciona somente os filhos diretos e nao os sub itens

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`
