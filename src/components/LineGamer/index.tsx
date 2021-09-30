import React, { useEffect, useState } from 'react'
import { MainContainer } from '../../GlobalStyle'
import { Wrapper, Article, SectionSeatGamer, PriceSeatGamer } from './styles'
import { SelectBallColors } from '../SelectBallColors'

type BallColorData = {
  name: string
  hex: string
  active: boolean
  urlSeat: string
}

const colorsHex = {
  red: '#CB3738',
  black: '#000',
  white: '#fff',
}

export function LineGamer() {
  const [listBallColors, setListBallColors] = useState<BallColorData[]>([])
  const [ballColorActive, setBallColorActive] = useState<BallColorData>()

  useEffect(() => {
    setListBallColors([
      {
        name: 'red',
        hex: colorsHex.red,
        active: true,
        urlSeat:
          'https://raw.githubusercontent.com/marcosmacedoo/fantastic-furniture/e6d98b4ffed12e7dd6fecf4e6473a5736dd74bc3/src/assets/poltrona-gamer-preta-e-vermelha.svg',
      },
      {
        name: 'black',
        hex: colorsHex.black,
        active: false,
        urlSeat:
          'https://raw.githubusercontent.com/marcosmacedoo/fantastic-furniture/e6d98b4ffed12e7dd6fecf4e6473a5736dd74bc3/src/assets/poltrona-gamer-preta.svg',
      },
      {
        name: 'white',
        hex: colorsHex.white,
        active: false,
        urlSeat:
          'https://raw.githubusercontent.com/marcosmacedoo/fantastic-furniture/e6d98b4ffed12e7dd6fecf4e6473a5736dd74bc3/src/assets/poltrona-gamer-branca.svg',
      },
    ])
  }, [])

  useEffect(() => {
    const [filteredBallColorActive] = listBallColors.filter(
      (ballColor) => ballColor.active
    )

    setBallColorActive(filteredBallColorActive)
  }, [listBallColors])

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
          <SelectBallColors
            listBallColors={listBallColors}
            setListBallColor={setListBallColors}
          />
          <img src={ballColorActive?.urlSeat} alt={ballColorActive?.name} />
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
