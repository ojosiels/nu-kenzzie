import styled from "styled-components";

export const StyledAddBankInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem;
  border: 2px solid var(--grey-2);
  border-radius: 1rem;

  box-shadow: 0px 0px 10px var(--grey-2);
  input,
  select {
    color: var(--grey-4);

    display: block;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--grey-1);
    border: 2px solid var(--grey-2);
    margin-top: 8px;
  }

  input::placeholder {
    color: var(--grey-3);
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
  }

  .flex {
    justify-content: space-between;
  }

  label {
    font-size: 12px;
  }

  button {
    background-color: var(--color-primary);
    color: white;
    padding: 0.8rem;
  }

  button:hover {
    color: white;
    background-color: var(--color-primary-2);
  }
`;
