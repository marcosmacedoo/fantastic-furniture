import styled from 'styled-components'

export const Wrapper = styled.section`
  & > div {
    margin-top: 9.6rem;
  }
`

export const Title = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
`

export const List = styled.ul`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem 1.6rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(35rem, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.article`
  height: 16rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  padding: 0 3.2rem;
  display: grid;
  place-content: center;
  transition: background-color 0.4s linear;

  &:hover {
    background: var(--black);
    color: var(--white-100);

    & > div > img {
      color: var(--white-100);
      filter: brightness(5);
    }

    & > div > div > p {
      color: #ebe6e6;
    }
  }

  @media (max-width: 1200px) {
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 0;
    place-content: initial;
  }
`

export const ContentCard = styled.div`
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  & > img {
    width: 7.2rem;
    height: 7.2rem;
  }

  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8rem;
  }
`

export const TitleCard = styled.h3`
  font-size: 2rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const DescriptionCard = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`
