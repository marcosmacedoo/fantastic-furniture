import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 30rem;
  display: flex;
  align-items: center;
  position: relative;

  & > div {
    display: flex;
    gap: 10rem;
  }
`

export const ContentLeft = styled.div`
  flex: 1 1 25rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & > h2 {
    font-size: 4.8rem;
    font-weight: 700;
    color: var(--black);
  }

  & > p {
    font-size: 1.8rem;
    font-weight: 400;
    color: var(--gray);
    line-height: 2.8rem;
  }
`

export const CarouselSeats = styled.ul`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(30rem, 1fr));
  column-gap: 2rem;
`

export const ItemCarousel = styled.li`
  padding: 2.4rem;
  width: 100%;
  transition: background-color 0.3s linear;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  & > img {
    width: 100%;
    height: 25rem;
  }

  & > h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  & > strong {
    font-size: 2.4rem;
  }
`

export const ButtonArrowRight = styled.button`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background: var(--black);
  display: grid;
  place-content: center;
  position: absolute;
  right: 8rem;
  transition: filter 0.1s linear, transform 0.1s linear;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.8);
    transform: scale(1.1);
  }

  & > img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }
`
