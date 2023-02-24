import { Container, Name, Text } from "./styles";

const CardOrder = () => {
  return (
    <Container>
      <img src="/exemplo.png" alt="food-image" />
      <Text>
        <Name>
          1 x Salada Radish <span>R$ 15,00</span>
        </Name>
        <button>Excluir</button>
      </Text>
    </Container>
  );
};

export default CardOrder;
