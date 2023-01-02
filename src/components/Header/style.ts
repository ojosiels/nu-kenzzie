import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 100px;
  background-color: var(--grey-1);
  box-shadow: 0px 5px 20px var(--grey-2);

  position: sticky;
  top: 0;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    color: var(--color-primary);
  }

  a {
    text-decoration: none;

    border-color: transparent;
    border-radius: 0.5rem;
    font-size: 12px;

    background-color: var(--grey-2);
    color: var(--grey-3);

    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: 0.2s;

    :hover {
      background-color: var(--grey-4);
      color: var(--grey-1);
      transition: 0.2s;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      display: flex;
      background-color: transparent;
      border-radius: 50%;
      width: fit-content;
      height: fit-content;
      font-size: 1.5rem;

      :hover {
        color: var(--color-primary);
      }
    }
  }

  @media (max-width: 800px) {
    padding: 1.2rem;
  }
`;
