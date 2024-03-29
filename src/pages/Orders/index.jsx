import {
  Button,
  Content,
  NotFound,
  PagamentoHeader,
  Pagamentos,
  Pedidos,
} from "./styles";
import CardOrder from "../../components/CardOrder";
import { useDispatch, useSelector } from "react-redux";
import Pix from "../../components/Pix";
import CreditCard from "../../components/CreditCard";
import { useState } from "react";
import { removeOrder } from "../../context/features/orders.slice";

const Orders = () => {
  const [payment, setPayment] = useState(false);

  const dispatch = useDispatch();

  const orders = useSelector((state) => state.persisted.order.orders);
  const totalPrice = orders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0
  );

  return (
    <Content>
      <Pedidos>
        <h2>Meu pedido</h2>
        {orders.length ? (
          orders.map((order) => (
            <CardOrder
              key={order.id}
              image={order.image}
              quantity={order.quantity}
              name={order.name}
              price={Number(order.price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              onClick={() => dispatch(removeOrder(order))}
            />
          ))
        ) : (
          <NotFound>Nenhum pedido encontrado</NotFound>
        )}
        <h3>
          Total:{" "}
          {Number(totalPrice).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h3>
      </Pedidos>
      <Pagamentos>
        <h2>Pagamento</h2>
        <PagamentoHeader>
          <Button onClick={() => setPayment(true)}>
            <img src="/pix.svg" alt="pix-image" />
            PIX
          </Button>
          <Button onClick={() => setPayment(false)}>
            <img src="/creditcard.svg" alt="creditcard-image" />
            Crédito
          </Button>
        </PagamentoHeader>
        {payment ? <Pix /> : <CreditCard />}
      </Pagamentos>
    </Content>
  );
};

export default Orders;
