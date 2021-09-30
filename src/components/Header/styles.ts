import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #3e3e3e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ImgLogo = styled.img`
  width: 17.7rem;
  height: 11.4rem;
`

export const NavList = styled.ul`
  display: flex;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const ItemNavList = styled.li`
  font-size: 2rem;
  font-weight: 500;

  & > a {
    transition: opacity 0.3s linear;
    color: var(--white-100);
  }

  & > a:hover {
    opacity: 0.7;
  }
`

export const ButtonMenuHamburger = styled.button`
  padding: 1.6rem;
  display: none;
  border-radius: 50%;
  background: var(--white-100);
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.6;
  }

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
