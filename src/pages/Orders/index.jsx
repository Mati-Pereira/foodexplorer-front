import {
  Button,
  Content,
  PagamentoHeader,
  Pagamentos,
  Pedidos,
} from "./styles";
import CardOrder from "../../components/CardOrder";
import { useDispatch, useSelector } from "react-redux";
import Pix from "../../components/Pix";
import CreditCard from "../../components/CreditCard";
import { useState } from "react";
import { clearOrders } from "../../context/features/orders.slice";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const Orders = () => {
  const [payment, setPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const orders = useSelector((state) => state.persisted.order.orders);
  const totalPrice = orders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const description = orders.map((order) => {
      return `${order.quantity} x ${order.name}, `;
    });
    await api
      .post(
        "/orders",
        {
          description: description.join("").slice(0, -2),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
      .then(() => {
        toast.success("Pedido realizado com sucesso!");
        dispatch(clearOrders());
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };

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
              onClick={() => dispatch(clearOrders())}
            />
          ))
        ) : (
          <h2
            style={{
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              margin: "0 auto",
            }}
          >
            Nenhum pedido encontrado
          </h2>
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
        {payment ? (
          <Pix />
        ) : (
          <CreditCard onSubmit={handleSubmit} isLoading={isLoading} />
        )}
      </Pagamentos>
    </Content>
  );
};

export default Orders;
