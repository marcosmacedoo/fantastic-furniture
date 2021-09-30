import React, { useEffect, useState } from 'react'
import { SelectBallColors } from '../SelectBallColors'
import { MainContainer } from '../../GlobalStyle'
import {
  Wrapper,
  SectionLeft,
  ActionsButtons,
  ButtonPrimary,
  ButtonSecondary,
  SectionRight,
} from './styles'

type BallColorData = {
  name: string
  hex: string
  active: boolean
  urlSeat: string
}

const colorsHex = {
  green: '#3AA6AC',
  red: '#CB3738',
  gray: '#626262',
  blue: '#445C80',
  yellow: '#EBD41C',
}

export function Main() {
  const [listBallColors, setListBallColors] = useState<BallColorData[]>([])
  const [ballColorActive, setBallColorActive] = useState<BallColorData>()

  useEffect(() => {
    setListBallColors([
      {
        name: 'green',
        hex: colorsHex.green,
        active: true,
        urlSeat:
          'https://raw.githubusercontent.com/marcosmacedoo/fantastic-furniture/e6d98b4ffed12e7dd6fecf4e6473a5736dd74bc3/src/assets/poltrona-verde.svg',
      },
      {
        name: 'red',
        hex: colorsHex.red,
        active: false,
        urlSeat:
          'https://raw.githubusercontent.com/marcosmacedoo/fantastic-furniture/e6d98b4ffed12e7dd6fecf4e6473a5736dd74bc3/src/assets/poltrona-vermelha.svg',
      },
      {
        name: 'gray',
        hex: colorsHex.gray,
        active: false,
        urlSeat:
          'https://raw.githubusercontent.com/marcosmacedoo/fantastic-furniture/e6d98b4ffed12e7dd6fecf4e6473a5736dd74bc3/src/assets/poltrona-cinza.svg',
      },
      {
        name: 'blue',
        hex: colorsHex.blue,
        active: false,
        urlSeat:
          'https://raw.githubusercontent.com/marcosmacedoo/fantastic-furniture/e6d98b4ffed12e7dd6fecf4e6473a5736dd74bc3/src/assets/poltrona-azul.svg',
      },
      {
        name: 'yellow',
        hex: colorsHex.yellow,
        active: false,
        urlSeat:
          'https://raw.githubusercontent.com/marcosmacedoo/fantastic-furniture/e6d98b4ffed12e7dd6fecf4e6473a5736dd74bc3/src/assets/poltrona-amarela.svg',
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
          <SelectBallColors
            listBallColors={listBallColors}
            setListBallColor={setListBallColors}
          />
          <img src={ballColorActive?.urlSeat} alt={ballColorActive?.name} />
        </SectionRight>
      </MainContainer>
    </Wrapper>
  )
}
