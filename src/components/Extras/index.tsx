import React from 'react'
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
import ImgPincel from '../../assets/pincel.svg'

export function Extras(): JSX.Element {
  return (
    <Wrapper>
      <MainContainer>
        <Title>Extras</Title>
        <List>
          <li>
            <Card>
              <ContentCard>
                <img src={ImgPincel} alt="Ícone de pincel" />
                <div>
                  <TitleCard>Garantia</TitleCard>
                  <DescriptionCard>
                    Todas suas compras são seguras e garantidas!
                  </DescriptionCard>
                </div>
              </ContentCard>
            </Card>
          </li>
          <li>
            <Card>
              <ContentCard>
                <img src={ImgPincel} alt="Ícone de pincel" />
                <div>
                  <TitleCard>Garantia</TitleCard>
                  <DescriptionCard>
                    Todas suas compras são seguras e garantidas!
                  </DescriptionCard>
                </div>
              </ContentCard>
            </Card>
          </li>
          <li>
            <Card>
              <ContentCard>
                <img src={ImgPincel} alt="Ícone de pincel" />
                <div>
                  <TitleCard>Garantia</TitleCard>
                  <DescriptionCard>
                    Todas suas compras são seguras e garantidas!
                  </DescriptionCard>
                </div>
              </ContentCard>
            </Card>
          </li>
          <li>
            <Card>
              <ContentCard>
                <img src={ImgPincel} alt="Ícone de pincel" />
                <div>
                  <TitleCard>Garantia</TitleCard>
                  <DescriptionCard>
                    Todas suas compras são seguras e garantidas!
                  </DescriptionCard>
                </div>
              </ContentCard>
            </Card>
          </li>
          <li>
            <Card>
              <ContentCard>
                <img src={ImgPincel} alt="Ícone de pincel" />
                <div>
                  <TitleCard>Garantia</TitleCard>
                  <DescriptionCard>
                    Todas suas compras são seguras e garantidas!
                  </DescriptionCard>
                </div>
              </ContentCard>
            </Card>
          </li>
          <li>
            <Card>
              <ContentCard>
                <img src={ImgPincel} alt="Ícone de pincel" />
                <div>
                  <TitleCard>Garantia</TitleCard>
                  <DescriptionCard>
                    Todas suas compras são seguras e garantidas!
                  </DescriptionCard>
                </div>
              </ContentCard>
            </Card>
          </li>
        </List>
      </MainContainer>
    </Wrapper>
  )
}
