import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--color-gray-dark);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  height: 5rem;
  position: sticky;
  top: 0;

  svg {
    color: var(--color-orange-secondary);
    width: 2.8rem;
    height: 2.8rem;
  }
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 17rem;
`;

export const Logo = styled.img`
  height: 70%;
  margin: 0px 16px;
`;

export const HeaderDivider = styled.hr`
  height: 50px;
  border: 1px solid var(--color-orange-secondary);
  margin: 0 1rem;
`;

export const HeaderPageTitle = styled.h1`
  font-size: 1.8rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-transform: none;
  margin: 0 16px;
`;