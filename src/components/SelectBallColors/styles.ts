import styled from 'styled-components'

type BallColorProps = {
  active?: boolean
  hex: string
}

export const Wrapper = styled.ul`
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`

export const BallColor = styled.button<BallColorProps>`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: ${(props) => props.hex};
  border: ${(props) => (props.active ? '3px solid #7AFFE7' : '')};

  @media (max-width: 768px) {
    height: 4.5rem;
    width: 4.5rem;
  }
`
