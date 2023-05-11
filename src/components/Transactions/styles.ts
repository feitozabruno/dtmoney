import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 112rem;
  margin: 0 auto;
  margin-top: 4rem;
  padding-inline: 2.4rem;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 8px;

  th {
    color: var(--gray-200);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5;
  }

  tbody {
    border-radius: 5px;
  }

  td {
    color: var(--gray-200);
    background: var(--gray-500);
    padding: 1rem 2rem;
    border: 0;

    &:first-child {
      color: var(--gray-200);
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &.deposit {
      color: var(--green-500);
    }

    &.withdraw {
      color: var(--red-500);
    }
  }
`;
