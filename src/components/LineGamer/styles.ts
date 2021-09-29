import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 20rem;
  position: relative;
  height: 70rem;
  overflow: hidden;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const BackgroundImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`

export const Article = styled.article`
  flex: 0 1 40rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & > h2,
  & > p {
    color: var(--white-100);
  }

  & > h2 {
    font-size: 4.8rem;
    font-weight: 700;
  }

  & > p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.8rem;
    color: #ebe6e6;
  }
`

export const SectionSeatGamer = styled.div`
  flex: 0 1 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  & > img {
    width: 100%;
    height: 37.5rem;
  }
`

export const PriceSeatGamer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--white-100);

  & > small {
    font-size: 1.4rem;
    text-decoration: line-through;
  }

  & > h3 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  & > p {
    font-size: 1.6rem;
    font-weight: 300;
  }
`
