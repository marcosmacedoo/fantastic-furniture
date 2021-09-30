import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { Wrapper, ButtonCloseMenuHamburger, ListLinks } from './styles'

export function MenuHamburger(): JSX.Element {
  const { closeHamburgerMenu } = useContext(GlobalContext)

  return (
    <Wrapper>
      <ButtonCloseMenuHamburger onClick={closeHamburgerMenu}>
        X
      </ButtonCloseMenuHamburger>
      <nav>
        <ListLinks>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Poltronas</a>
          </li>
          <li>
            <a href="">Sobre nós</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ListLinks>
      </nav>
    </Wrapper>
  )
}
