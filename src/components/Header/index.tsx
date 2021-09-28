import React from 'react'
import imgLogoDark from '../../assets/logo-dark.svg'
import { MainContainer } from '../../GlobalStyle'
import { Wrapper, ImgLogo, NavList, ItemNavList } from './styles'

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <MainContainer>
        <ImgLogo src={imgLogoDark} alt="Fantastic Furniture" />
        <nav>
          <NavList>
            <ItemNavList>
              <a href="">Home</a>
            </ItemNavList>
            <ItemNavList>
              <a href="">Poltronas</a>
            </ItemNavList>
            <ItemNavList>
              <a href="">Sobre nós</a>
            </ItemNavList>
            <ItemNavList>
              <a href="">Blog</a>
            </ItemNavList>
            <ItemNavList>
              <a href="">Contato</a>
            </ItemNavList>
          </NavList>
        </nav>
      </MainContainer>
    </Wrapper>
  )
}
