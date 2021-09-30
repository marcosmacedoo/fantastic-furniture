import React from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { ListSeats } from '../../components/ListSeats'
import { LineGamer } from '../../components/LineGamer'
import { Extras } from '../../components/Extras'
import { Footer } from '../../components/Footer'
import { GlobalStyle } from '../../GlobalStyle'
import { useGlobalContext } from '../../contexts/GlobalContext'
import { MenuHamburger } from '../../components/MenuHamburger'

export default function Home() {
  const { isOpenHamburgerMenu } = useGlobalContext()

  return (
    <div>
      <Header />
      <Main />
      <ListSeats />
      <LineGamer />
      <Extras />
      <Footer />
      {isOpenHamburgerMenu && <MenuHamburger />}
      <GlobalStyle />
    </div>
  )
}
