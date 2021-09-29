import styled from 'styled-components'
import ImgBackgroundLineGamer from '../../assets/background-linha-gamer.svg'

export const Wrapper = styled.section`
  margin-top: 20rem;
  height: 75rem;
  background-image: url(${ImgBackgroundLineGamer});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 6rem;

    @media (max-width: 860px) {
      height: auto;
      padding: 15rem 0;
    }
  }

  @media (max-width: 860px) {
    height: auto;
    overflow: initial;
  }
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

    @media (max-width: 768px) {
      font-size: 2rem;
      line-height: 3.2rem;
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 80%;
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
