import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 12rem;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;

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
  color: var(--black);

  & > a {
    transition: opacity 0.3s linear;
  }

  & > a:hover {
    opacity: 0.7;
  }
`

export const MenuHamburguer = styled.button`
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
