import React, { useContext } from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { ListSeats } from '../../components/ListSeats'
import { LineGamer } from '../../components/LineGamer'
import { Extras } from '../../components/Extras'
import { Footer } from '../../components/Footer'
import { GlobalStyle } from '../../GlobalStyle'
import { GlobalContext } from '../../contexts/GlobalContext'
import { MenuHamburger } from '../../components/MenuHamburger'

function Home() {
  const { isOpenHamburgerMenu } = useContext(GlobalContext)

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

export default Home
