import React, { createContext, ReactNode, useState } from 'react'

type GlobalContextData = {
  isOpenHamburgerMenu: boolean
  closeHamburgerMenu: () => void
  openHamburgerMenu: () => void
}

export const GlobalContext = createContext({} as GlobalContextData)

type GlobalContextProviderProps = {
  children: ReactNode
}

export function GlobalContextProvider({
  children,
}: GlobalContextProviderProps) {
  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false)

  function closeHamburgerMenu() {
    setIsOpenHamburgerMenu(false)
  }

  function openHamburgerMenu() {
    setIsOpenHamburgerMenu(true)
  }

  return (
    <GlobalContext.Provider
      value={{ isOpenHamburgerMenu, closeHamburgerMenu, openHamburgerMenu }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
