import styled from "styled-components";

export const StyledDashboardPage = styled.div`
  height: 100vh;
  color: var(--grey-4);

  main {
    margin: 2.2rem 100px;
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
  .bankInfoList {
    width: 35vw;
  }
  .bankInfoList > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .bankInfoList > div p {
    font-weight: 700;
    min-width: fit-content;
  }

  @media (max-width: 1330px) {
    .bankInfoList > div {
      flex-direction: column;
    }
    .bankInfoList > div p {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 800px) {
    main {
      flex-direction: column;
      margin: 2.2rem 1rem;
    }
    .bankInfoList {
      width: unset;
    }
  }
`;
