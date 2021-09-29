import styled from 'styled-components'
import ImgBackground from '../../assets/image-background.svg'

type BallColorProps = {
  active?: boolean
}

export const Wrapper = styled.main`
  padding-top: 14rem;
  height: 61.8rem;
  width: 100%;
  background: var(--blue-100);
  background-image: url(${ImgBackground});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  & > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 4rem;
    }
  }

  @media (max-width: 1200px) {
    padding-top: 18rem;
    height: auto;
  }
`

export const SectionLeft = styled.section`
  flex: 0 0 45rem;

  & > h1 {
    font-size: 6.1rem;
    font-weight: 700;
    color: var(--black);

    @media (max-width: 475px) {
      font-size: 5rem;
    }
  }

  & > p {
    margin-top: 1.6rem;
    font-size: 2rem;
    font-weight: 400;
    color: var(--gray);

    @media (max-width: 475px) {
      margin-top: 2.2rem;
      font-size: 2.2rem;
      line-height: 3rem;
    }
  }

  @media (max-width: 1200px) {
    flex: 0 0 auto;
    width: min(100%, 50rem);
  }
`

export const ActionsButtons = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2.2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 6rem;
  }

  @media (max-width: 475px) {
    flex-direction: column;
  }
`

export const ButtonPrimary = styled.button`
  flex: 0 1 15rem;
  height: 5rem;
  background: var(--black);
  color: var(--white-100);
  border-radius: 3.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  transition: opacity 0.2s linear, transform 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(1.05);
    opacity: 1;
  }

  @media (max-width: 1096px) {
    height: 6rem;
    flex: 1 1 15rem;
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    height: 7rem;
    font-size: 2rem;
  }

  @media (max-width: 475px) {
    height: auto;
    flex: 1 1 8rem;
    font-size: 2.2rem;
  }
`

export const ButtonSecondary = styled(ButtonPrimary)`
  background: transparent;
  color: var(--black);
  border: 2px solid var(--black);
`

export const SectionRight = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    margin-top: 10.6rem;
    width: 63rem;
    height: 54rem;
    object-fit: contain;

    @media (max-width: 550px) {
      margin-top: 5rem;
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1096px) {
    margin-top: 6.4rem;
  }
`

export const SelectColors = styled.ul`
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`

const BallColor = styled.button<BallColorProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: ${(props) => (props.active ? '3px solid var(--black)' : '')};

  @media (max-width: 768px) {
    height: 4.5rem;
    width: 4.5rem;
  }
`

export const BallColorGreen = styled(BallColor)`
  background: var(--green);
`

export const BallColorRed = styled(BallColor)`
  background: var(--red);
`

export const BallColorBlueDark = styled(BallColor)`
  background: var(--blue-200);
`

export const BallColorYellow = styled(BallColor)`
  background: var(--yellow);
`

export const BallColorGray = styled(BallColor)`
  background: var(--gray);
`

export const BallColorBlack = styled(BallColor)`
  background: #000;
`

export const BallColorWhite = styled(BallColor)`
  background: var(--white-100);
`
