import React from 'react'
import { MainContainer } from '../../GlobalStyle'
import {
  ContentLeft,
  Wrapper,
  CarouselSeats,
  ItemCarousel,
  ButtonArrowRight,
} from './styles'
import ImgSeatAzul from '../../assets/carousel-cadeira-azul.svg'
import ImgSeatWhite from '../../assets/carousel-poltrona-branca.svg'
import ImgSeatGreen from '../../assets/carousel-poltrona-redonda-verde.svg'
import ImgArrowRight from '../../assets/seta-direita-botao.svg'

export function ListSeats(): JSX.Element {
  return (
    <Wrapper>
      <MainContainer>
        <ContentLeft>
          <h2>Porque somos os melhor do pais</h2>
          <p>
            Entregamos o melhor serviço no menor tempo possivel e com a maior
            qualidade possivel. Poltronas de qualidade e de alto padrão, somente
            as melhores do mundo.
          </p>
        </ContentLeft>
        <CarouselSeats>
          <ItemCarousel>
            <img src={ImgSeatAzul} alt="Poltrona La costé de cor azul escuro" />
            <h3>Poltrona La costé</h3>
            <strong>R$999,90</strong>
          </ItemCarousel>
          <ItemCarousel>
            <img src={ImgSeatWhite} alt="Poltrona Salamanca de cor branca" />
            <h3>Poltrona Salamanca</h3>
            <strong>R$2499,90</strong>
          </ItemCarousel>
          <ItemCarousel>
            <img src={ImgSeatGreen} alt="Poltrona GiraGira de cor verde" />
            <h3>Poltrona GiraGira</h3>
            <strong>R$999,90</strong>
          </ItemCarousel>
        </CarouselSeats>
      </MainContainer>
      <ButtonArrowRight>
        <img src={ImgArrowRight} alt="Seta para direita" />
      </ButtonArrowRight>
    </Wrapper>
  )
}
