import React from 'react'
import { MainContainer } from '../../GlobalStyle'
import {
  Wrapper,
  ImgLogo,
  NavList,
  ItemNavList,
  MenuHamburguer,
} from './styles'
import imgLogoDark from '../../assets/logo-dark.svg'
import imgIconMenuHamburguer from '../../assets/menu-hamburguer.svg'

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <MainContainer>
        <ImgLogo src={imgLogoDark} alt="Fantastic Furniture" />
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
        <MenuHamburguer>
          <img src={imgIconMenuHamburguer} alt="Menu" />
        </MenuHamburguer>
      </MainContainer>
    </Wrapper>
  )
}
