import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray-700);
  height: 21.2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  padding-top: 3.6rem;
`;

export const Button = styled.button`
  background: var(--gray-400);
  border-radius: 5px;
  color: var(--gray-100);
  font-weight: 600;
  padding: 1.2rem 3.2rem;
  transition: background 0.4s;

  &:hover {
    color: var(--gray-700);
    background: var(--gray-100);
  }
`;
