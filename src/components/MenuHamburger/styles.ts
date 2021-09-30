import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--black);
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-content: center;
  z-index: 3;
`

export const ButtonCloseMenuHamburger = styled.button`
  padding: 1.6rem 2.4rem;
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--black);
  border-radius: 50%;
  background: var(--white-100);
  transition: opacity 0.2s linear;
  position: absolute;
  top: 4rem;
  right: 4rem;

  &:hover {
    opacity: 0.6;
  }
`

export const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  li a {
    font-size: 3.2rem;
    font-weight: 500;
    color: var(--white-100);
  }
`
