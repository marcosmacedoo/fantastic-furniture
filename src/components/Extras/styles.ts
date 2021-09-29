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
  }
`

export const ContentCard = styled.div`
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
  }
`

export const TitleCard = styled.h3`
  font-size: 2rem;
  font-weight: 500;
`

export const DescriptionCard = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--gray);
`
