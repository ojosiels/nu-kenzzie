import { reset } from "react-style-reset";
import { createGlobalStyle } from "styled-components";

interface iGlobalStylesProps {
  theme: {
    colorPrimary: string;
    colorPrimary2: string;
    colorSecondary: string;

    backgroundColor: string;

    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
  };
}

export default createGlobalStyle`
${reset}
  a{
    text-decoration: none;
  }

:root {
  --color-primary: ${(props: iGlobalStylesProps) => props.theme.colorPrimary};
  --color-primary-2: ${(props) => props.theme.colorPrimary2};
  --color-secondary: ${(props) => props.theme.colorSecondary};

  --background-color: ${(props) => props.theme.backgroundColor};

  --grey-1: ${(props) => props.theme.grey1};
  --grey-2: ${(props) => props.theme.grey2};
  --grey-3: ${(props) => props.theme.grey3};
  --grey-4: ${(props) => props.theme.grey4};
}

body {
  font-family: "Nunito", sans-serif;
  list-style: none;
  background-color: var(--background-color);
}


.flex {
  display: flex;
  gap: 1rem;
}

button {
  border-color: transparent;
  border-radius: 0.5rem;
  font-size: 12px;

  background-color: var(--grey-2);
  color: var(--grey-4);

  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: 0.2s;

  :hover {
    background-color: var(--grey-4);
    color: var(--grey-1);
    transition: 0.2s;
  }
}


`;
