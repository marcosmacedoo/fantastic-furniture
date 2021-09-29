import React from 'react'
import { MainContainer } from '../../GlobalStyle'
import { Wrapper, Article, SectionSeatGamer, PriceSeatGamer } from './styles'
import {
  SelectColors,
  BallColorRed,
  BallColorBlack,
  BallColorWhite,
} from '../Main/styles'
import ImgSeatGamerBlackAndRed from '../../assets/poltrona-gamer-preta-e-vermelha.svg'

export function LineGamer(): JSX.Element {
  return (
    <Wrapper>
      <MainContainer>
        <Article>
          <h2>Linha Gamer</h2>
          <p>
            Uma opção elegante que não ficará deslocada no teu escritório, sala
            de estar, quarto ou estúdio. Um look discreto que combina bem com
            outros. Alpha Gamer Terion possui bolsos em ambos os lados para fins
            de armazenamento.
          </p>
        </Article>
        <SectionSeatGamer>
          <SelectColors>
            <li>
              <BallColorRed active />
            </li>
            <li>
              <BallColorBlack />
            </li>
            <li>
              <BallColorWhite />
            </li>
          </SelectColors>
          <img
            src={ImgSeatGamerBlackAndRed}
            alt="Poltrona Gamer de cores preto e vermelho"
          />
          <PriceSeatGamer>
            <small>R$2199,90</small>
            <h3>R$1999,90</h3>
            <p>Á vista</p>
          </PriceSeatGamer>
        </SectionSeatGamer>
      </MainContainer>
    </Wrapper>
  )
}
