import React from 'react'
import { Wrapper, Infos, Logo, ItemInfos, Divider, SocialMedia } from './styles'
import { MainContainer } from '../../GlobalStyle'
import ImgLogoDark from '../../assets/logo-dark.svg'
import ImgLogoFacebook from '../../assets/facebook.svg'
import ImgLogoTwitter from '../../assets/twitter.svg'
import ImgLogoInstagram from '../../assets/instagram.svg'

export function Footer(): JSX.Element {
  return (
    <Wrapper>
      <MainContainer>
        <Infos>
          <Logo src={ImgLogoDark} alt="Logo Fantastic Furniture" />
          <ItemInfos>
            <h3>Sobre</h3>
            <ul>
              <li>Quem somos</li>
              <li>Onde somos</li>
              <li>Como somos</li>
            </ul>
          </ItemInfos>
          <ItemInfos>
            <h3>Suporte</h3>
            <ul>
              <li>Fale conosco</li>
              <li>Termos</li>
            </ul>
          </ItemInfos>
          <ItemInfos>
            <h3>Redes</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </ItemInfos>
        </Infos>
        <Divider />
        <SocialMedia>
          <ul>
            <li>
              <img src={ImgLogoFacebook} alt="Logo do Facebook" />
            </li>
            <li>
              <img src={ImgLogoTwitter} alt="Logo do Twitter" />
            </li>
            <li>
              <img src={ImgLogoInstagram} alt="Logo do Instagram" />
            </li>
          </ul>
          <span>Company 2020. All rights reserved.</span>
        </SocialMedia>
      </MainContainer>
    </Wrapper>
  )
}
