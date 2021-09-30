import React, { useEffect, useState } from 'react'
import { MainContainer } from '../../GlobalStyle'
import {
  Wrapper,
  Title,
  List,
  Card,
  TitleCard,
  DescriptionCard,
  ContentCard,
} from './styles'
import { api } from '../../services/api'
import { useGlobalContext } from '../../contexts/GlobalContext'

type ExtrasItemData = {
  id: number
  title: string
  description: string
  url: string
}

export function Extras(): JSX.Element {
  const [extrasItems, setExtrasItems] = useState<ExtrasItemData[]>([])
  const { loadDataApi } = useGlobalContext()

  useEffect(() => {
    async function loadDataExtrasItem() {
      const endpoint = '/seats-section-extras'

      await loadDataApi(api, endpoint, setExtrasItems)
    }

    loadDataExtrasItem()
  }, [])

  return (
    <Wrapper>
      <MainContainer>
        <Title>Extras</Title>
        <List>
          {extrasItems?.map((item) => (
            <li key={item.id}>
              <Card>
                <ContentCard>
                  <img src={item.url} alt={item.title} />
                  <div>
                    <TitleCard>{item.title}</TitleCard>
                    <DescriptionCard>{item.description}</DescriptionCard>
                  </div>
                </ContentCard>
              </Card>
            </li>
          ))}
        </List>
      </MainContainer>
    </Wrapper>
  )
}
