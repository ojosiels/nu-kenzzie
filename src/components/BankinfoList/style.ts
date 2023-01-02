import styled from "styled-components";

export const StyledBankList = styled.li`
  li {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    padding: 1rem;

    background-color: var(--grey-1);

    box-shadow: 0px 0px 6px var(--grey-2);

    border-left: 5px solid var(--grey-2);
    border-radius: 0.3rem;
  }

  .Gain {
    border-color: var(--color-secondary);
  }

  li .valueType {
    margin-top: 0.5rem;
    font-size: 12px;
  }

  li div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  li div:nth-child(2) p {
    min-width: fit-content;
  }

  li div:nth-child(2) button {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 50%;
  }
`;

export const StyledEmptyBankList = styled.div`
  width: fit-content;
  padding: 25px;
  background-color: var(--grey-1);

  h2 {
    font-weight: 600;
    color: var(--grey-4);
  }
`;
