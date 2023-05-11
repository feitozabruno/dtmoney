import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--gray-100);
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  input {
    color: var(--gray-100);
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;
    border-radius: 4px;
    background: var(--gray-500);
    border: 1px solid var(--gray-400);
    font-size: 1.6rem;
    font-weight: 400;

    &::placeholder {
      color: var(--gray-300);
    }

    & + input {
      margin-top: 1.6rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;
    background: var(--green-500);
    color: var(--gray-100);
    border-radius: 4px;
    margin-top: 2.4rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 6.4rem;
  border: 1px solid var(--gray-400);
  border-radius: 4px;
  transition: border-color 0.2s;
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  &:hover {
    border-color: var(--gray-300);
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1.6rem;
    color: var(--gray-100);
  }
`;
