import React, { useEffect, useState } from 'react'
import { MainContainer } from '../../GlobalStyle'
import {
  ContentLeft,
  Wrapper,
  CarouselSeats,
  ItemCarousel,
  ButtonArrowRight,
} from './styles'
import ImgArrowRight from '../../assets/seta-direita-botao.svg'
import { useGlobalContext } from '../../contexts/GlobalContext'
import { api } from '../../services/api'

type SeatImage = {
  id: number
  url: string
  title: string
  price: number
}

export function ListSeats() {
  const [seatsImagesAll, setSeatsImagesAll] = useState<SeatImage[]>([])
  const [seatsImagesShow, setSeatsImagesShow] = useState<SeatImage[]>([])
  const [countersSeatsImagesShow, setCountersSeatsImagesShow] = useState({
    start: 0,
    end: 3,
  })
  const { loadDataApi } = useGlobalContext()

  function nextSeatsImagesShow() {
    const amountSeatsImagesShow = 3
    let start = 0
    let end = amountSeatsImagesShow
    let slicedSeatsImagesShow: SeatImage[] = []

    if (countersSeatsImagesShow.end < seatsImagesAll.length) {
      start += amountSeatsImagesShow
      end += amountSeatsImagesShow
    }

    setCountersSeatsImagesShow({
      start,
      end,
    })

    slicedSeatsImagesShow = seatsImagesAll.slice(start, end)

    setSeatsImagesShow(slicedSeatsImagesShow)
  }

  useEffect(() => {
    async function loadDataSeatsImages() {
      const endpoint = '/seats-section-carousel-seats'

      await loadDataApi(api, endpoint, setSeatsImagesAll)
    }

    loadDataSeatsImages()
  }, [])

  useEffect(() => {
    nextSeatsImagesShow()
  }, [seatsImagesAll])

  return (
    <Wrapper>
      <MainContainer>
        <ContentLeft>
          <h2>Porque somos os melhor do pais</h2>
          <p>
            Entregamos o melhor serviço no menor tempo possivel e com a maior
            qualidade possivel. Poltronas de qualidade e de alto padrão, somente
            as melhores do mundo.
          </p>
        </ContentLeft>
        <CarouselSeats>
          {seatsImagesShow.map((seatImage) => (
            <ItemCarousel key={seatImage.id}>
              <img src={seatImage.url} alt={seatImage.title} />
              <h3>{seatImage.title}</h3>
              <strong>R${seatImage.price}</strong>
            </ItemCarousel>
          ))}
        </CarouselSeats>
      </MainContainer>
      <ButtonArrowRight onClick={nextSeatsImagesShow}>
        <img src={ImgArrowRight} alt="Seta para direita" />
      </ButtonArrowRight>
    </Wrapper>
  )
}
