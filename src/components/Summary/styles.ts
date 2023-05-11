import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 3.2rem;
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  margin-top: -5.5rem;
`;

export const Box = styled.div`
  width: calc(100% / 3);
  margin: 0 auto;
  background: var(--gray-500);
  padding: 2.5rem 2.1rem 1.8rem 3.2rem;
  border-radius: 5px;
  color: var(--gray-200);

  strong {
    display: block;
    color: var(--gray-100);
    font-size: 2.4rem;
    margin-top: 1.4rem;
    font-weight: 600;
  }

  &:nth-child(3) {
    color: var(--gray-100);
    background: var(--green-500);

    strong {
      color: var(--gray-100);
    }
  }
`;

export const Content = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
