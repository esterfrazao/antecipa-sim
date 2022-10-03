import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "BioRhyme", sans-serif;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--white);
  width: 100vw;
  height: 100vh;
}

#root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

:root {
  --white: #ebf0f2;
  --primary-shadow: #c4c7f2;
  --light-blue: #9794f2;
  --secondary-shadow: #6f6bf2;
  --bright-blue: #433df2;
  --dark: #0c0282;
}

::-webkit-scrollbar {
  width: 7px;
  padding: 0 2px;
}
::-webkit-scrollbar-track {
  background-color: #ffffff00;
}
::-webkit-scrollbar-thumb {
  background: var(--dark);
  border-radius: 10px;
}
`;

export const AppContainer = styled.div`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
  min-width: 300px;
  height: 55%;
  border: 4px groove var(--primary-shadow);

  @media (max-width: 700px) {
    flex-direction: column;
    height: 85%;
  }
`;

export const Calculator = styled.main`
  background-color: #ffffff;
  width: 60%;
  height: 100%;
  padding: 10px;

  h1 {
    font-size: 1.5rem;
    color: var(--dark);
    line-height: 2rem;
    margin-bottom: 10px;
  }

  @media (max-width: 700px) {
    height: 59%;
    width: 100%;
  }
`;

export const Aside = styled.aside`
  padding: 10px;
  background-color: var(--primary-shadow);
  width: 40%;
  height: 100%;

  h2 {
    line-height: 1.8rem;
    margin-bottom: 10%;
  }

  @media (max-width: 700px) {
    height: 41%;
    width: 100%;

    h2 {
      margin-bottom: 4%;
    }
  }
`;
