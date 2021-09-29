import styled from 'styled-components'
import ImgBackground from '../../assets/image-background.svg'

type BallColorProps = {
  active?: boolean
}

export const Wrapper = styled.main`
  height: 61.8rem;
  width: 100%;
  background: var(--blue-100);
  background-image: url(${ImgBackground});
  background-position: center;
  background-repeat: no-repeat;

  & > div {
    padding-top: 10rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SectionLeft = styled.section`
  flex: 0 1 45rem;

  & > h1 {
    font-size: 6.1rem;
    font-weight: 700;
    color: var(--black);
  }

  & > p {
    margin-top: 0.8rem;
    font-size: 2rem;
    font-weight: 300;
    color: var(--black);
  }
`

export const ActionsButtons = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2.2rem;
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
`

export const ButtonSecondary = styled(ButtonPrimary)`
  background: transparent;
  color: var(--black);
  border: 2px solid var(--black);
`

export const SectionRight = styled.section`
  margin-top: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    margin-top: 10.6rem;
    width: 63rem;
    height: 54rem;
    object-fit: cover;
  }
`

export const SelectColors = styled.ul`
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;
`

const BallColor = styled.button<BallColorProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  border: ${(props) => (props.active ? '3px solid var(--black)' : '')};
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
