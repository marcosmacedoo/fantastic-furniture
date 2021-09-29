import React from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { ListSeats } from '../../components/ListSeats'
import { LineGamer } from '../../components/LineGamer'
import { Extras } from '../../components/Extras'
import { GlobalStyle } from '../../GlobalStyle'

function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <Main />
      <ListSeats />
      <LineGamer />
      <Extras />
      <GlobalStyle />
    </div>
  )
}

export default Home
