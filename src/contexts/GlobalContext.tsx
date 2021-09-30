import React, { createContext, ReactNode, useContext, useState } from 'react'
import { AxiosInstance } from 'axios'

type GlobalContextData = {
  isOpenHamburgerMenu: boolean
  closeHamburgerMenu: () => void
  openHamburgerMenu: () => void
  loadDataApi: (
    api: AxiosInstance,
    endpoint: string,
    setData: (data: []) => void
  ) => Promise<void>
}

const GlobalContext = createContext({} as GlobalContextData)

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

  async function loadDataApi(
    api: AxiosInstance,
    endpoint: string,
    setData: (data: []) => void
  ) {
    try {
      const responseApi = await api.get(endpoint)
      const { data } = responseApi

      setData(data)
    } catch {
      console.error(`Error ao conectar com a API endpoint ${endpoint}`)
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        isOpenHamburgerMenu,
        closeHamburgerMenu,
        openHamburgerMenu,
        loadDataApi,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
