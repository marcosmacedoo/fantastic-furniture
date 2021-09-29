import React from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { ListSeats } from '../../components/ListSeats'
import { LineGamer } from '../../components/LineGamer'
import { GlobalStyle } from '../../GlobalStyle'

function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <Main />
      <ListSeats />
      <LineGamer />
      <GlobalStyle />
    </div>
  )
}

export default Home
