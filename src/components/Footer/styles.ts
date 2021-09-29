import styled from 'styled-components'

export const Wrapper = styled.footer`
  margin: 20rem 0 4rem 0;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`

export const Infos = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20rem repeat(3, minmax(20rem, 1fr));
  grid-template-rows: 15rem;
  column-gap: 3.2rem;
`

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`

export const ItemInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  letter-spacing: 0.1rem;

  & > h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  & > ul li {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--gray);
    cursor: pointer;
    transition: opacity 0.3s linear;
  }

  & > ul li:hover {
    opacity: 0.8;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(0, 0, 0, 0.1);
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > ul {
    display: flex;
    gap: 2.4rem;

    li,
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  & > span {
    font-size: 1.4rem;
    color: var(--gray);
  }
`
