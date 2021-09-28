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
