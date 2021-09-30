import React from 'react'
import { BallColor, Wrapper } from './styles'

type BallColorData = {
  name: string
  hex: string
  active: boolean
  urlSeat: string
}

type SelectBallColorsProps = {
  listBallColors: BallColorData[]
  setListBallColor: (listBallColorsUpdated: BallColorData[]) => void
}

export function SelectBallColors({
  listBallColors,
  setListBallColor,
}: SelectBallColorsProps) {
  function handleClickBallColor(nameColor: string) {
    const listBallColorsUpdated = listBallColors.map((itemColor) => {
      if (itemColor.name === nameColor) {
        return {
          ...itemColor,
          active: true,
        }
      }

      return {
        ...itemColor,
        active: false,
      }
    })

    setListBallColor(listBallColorsUpdated)
  }

  return (
    <Wrapper>
      {listBallColors.map((itemColor) => (
        <li key={itemColor.name}>
          <BallColor
            hex={itemColor.hex}
            active={itemColor.active}
            onClick={() => handleClickBallColor(itemColor.name)}
          />
        </li>
      ))}
    </Wrapper>
  )
}
