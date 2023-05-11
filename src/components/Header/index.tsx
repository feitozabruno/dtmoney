import logoImg from "../../../public/logo.svg";
import { Button, Content, Container } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="ignite money" />
        <Button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </Button>
      </Content>
    </Container>
  );
}
