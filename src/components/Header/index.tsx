import React from 'react'
import { useGlobalContext } from '../../contexts/GlobalContext'
import { MainContainer } from '../../GlobalStyle'
import {
  Wrapper,
  ImgLogo,
  NavList,
  ItemNavList,
  ButtonMenuHamburger,
} from './styles'
import imgLogoLight from '../../assets/logo-light.svg'
import imgIconMenuHamburguer from '../../assets/menu-hamburguer.svg'

export function Header() {
  const { openHamburgerMenu } = useGlobalContext()

  return (
    <Wrapper>
      <MainContainer>
        <ImgLogo src={imgLogoLight} alt="Fantastic Furniture" />
        <nav>
          <NavList>
            <ItemNavList>
              <a href="#">Home</a>
            </ItemNavList>
            <ItemNavList>
              <a href="#">Poltronas</a>
            </ItemNavList>
            <ItemNavList>
              <a href="#">Sobre nós</a>
            </ItemNavList>
            <ItemNavList>
              <a href="#">Blog</a>
            </ItemNavList>
            <ItemNavList>
              <a href="#">Contato</a>
            </ItemNavList>
          </NavList>
        </nav>
        <ButtonMenuHamburger onClick={openHamburgerMenu}>
          <img src={imgIconMenuHamburguer} alt="Menu" />
        </ButtonMenuHamburger>
      </MainContainer>
    </Wrapper>
  )
}
