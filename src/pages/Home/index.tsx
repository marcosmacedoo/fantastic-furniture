import React from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { GlobalStyle } from '../../GlobalStyle'

function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <Main />
      <GlobalStyle />
    </div>
  )
}

export default Home
