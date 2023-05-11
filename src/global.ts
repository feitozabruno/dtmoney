import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    --green-500: #33CC95;
    --red-500: #E52E4D;
    --gray-700: #0D0D0D;
    --gray-600: #1A1A1A;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #D9D9D9;
    --gray-100: #F2F2F2;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 140%;
  }

  body {
    background: var(--gray-600);
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    gap: .8rem;
    cursor: pointer;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    background: var(--gray-700);
    width: 100%; 
    max-width: 576px;
    padding: 4.8rem;
    position: relative;
    border-radius: 4px;
    margin: 0 auto;
    background: var(--gray-600);
  }

  .react-modal-close {
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.3);
    }
  }
`;
