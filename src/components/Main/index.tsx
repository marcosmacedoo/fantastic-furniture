import React from 'react'
import { MainContainer } from '../../GlobalStyle'
import {
  Wrapper,
  SectionLeft,
  ActionsButtons,
  ButtonPrimary,
  ButtonSecondary,
  SectionRight,
  SelectColors,
  BallColorGreen,
  BallColorRed,
  BallColorBlueDark,
  BallColorYellow,
  BallColorGray,
} from './styles'
import ImgPoltronaVerde from '../../assets/poltrona-verde.svg'

export function Main(): JSX.Element {
  return (
    <Wrapper>
      <MainContainer>
        <SectionLeft>
          <h1>Poltronas que todo mundo adora</h1>
          <p>
            Nos temos mais de 10 mil compradores felizes e satisfeitos com
            nossos produtos.
          </p>
          <ActionsButtons>
            <ButtonPrimary>Compre agora</ButtonPrimary>
            <ButtonSecondary>Explore o site</ButtonSecondary>
          </ActionsButtons>
        </SectionLeft>
        <SectionRight>
          <SelectColors>
            <li>
              <BallColorGreen active />
            </li>
            <li>
              <BallColorRed />
            </li>
            <li>
              <BallColorBlueDark />
            </li>
            <li>
              <BallColorYellow />
            </li>
            <li>
              <BallColorGray />
            </li>
          </SelectColors>
          <img src={ImgPoltronaVerde} alt="Poltrona de cor verde" />
        </SectionRight>
      </MainContainer>
    </Wrapper>
  )
}
