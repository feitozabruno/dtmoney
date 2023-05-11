import { Box, Content, Container } from "./styles";
import arrowUpImg from "../../assets/arrowUp.svg";
import arrowDownImg from "../../assets/arrowDown.svg";
import dollarImg from "../../assets/dollar.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <Box>
        <Content>
          <span>Entradas</span>
          <img src={arrowUpImg} alt="Entradas" />
        </Content>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </Box>
      <Box>
        <Content>
          <span>Saídas</span>
          <img src={arrowDownImg} alt="Saídas" />
        </Content>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </Box>
      <Box>
        <Content>
          <span>Total</span>
          <img src={dollarImg} alt="Saídas" />
        </Content>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </Box>
    </Container>
  );
}
