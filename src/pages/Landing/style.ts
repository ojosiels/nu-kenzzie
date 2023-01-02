import styled from "styled-components";

export const StyledLandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    color: var(--grey-4);
    width: 20vw;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  h1 {
    font-weight: 800;
    font-size: 24px;
  }

  span {
    color: var(--color-primary);
  }

  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 3rem;
  }
  p {
    font-weight: 300;
    font-size: 12px;
  }

  a {
    background-color: var(--color-primary);
    color: white;

    border-color: transparent;
    border-radius: 0.8rem;

    width: 90%;
    padding: 1rem;

    text-align: center;
    font-size: 1rem;

    transition: 0.2s;

    :hover {
      background-color: var(--color-primary-2);
      transition: 0.2s;
    }
  }

  @media (max-width: 1000px) {
    padding: 1rem;
    flex-direction: column;
    main {
      width: fit-content;
    }
  }
`;
