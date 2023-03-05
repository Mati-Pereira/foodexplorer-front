import { Content, MobileContent, Orders } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import OrderStatus from "../../components/OrderStatus";
import MobileProductOrder from "../../components/MobileProductOrder";

const OrdersHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await api.get("/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = response.data;
      const newData = data.map((data) => {
        const time = data.updated_at.split(" ");
        return {
          id: data.id,
          status: data.status,
          description: data.description,
          date: time[0]
            .replaceAll("-", "/")
            .split("/")
            .reverse()
            .join("/")
            .slice(0, 5),
          hour: time[1].slice(0, 5),
        };
      });
      setOrders(newData);
    };
    fetchOrder();
  }, []);
  return (
    <>
      <Content>
        <h1>Histórico de pedidos</h1>
        <table>
          <thead>
            <tr>
              <td>Status</td>
              <td>Código</td>
              <td>Detalhamento</td>
              <td>Data e Hora</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <OrderStatus status={order.status} />
                </td>
                <td>{String(order.id).padStart(5, "0")}</td>
                <td>{order.description}</td>
                <td>
                  {order.date} às {order.hour}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      <MobileContent>
        <h1>Histórico de pedidos</h1>
        <Orders>
          {orders.map((order, index) => (
            <MobileProductOrder
              key={index}
              status={order.status}
              id={String(order.id).padStart(5, "0")}
              description={order.description}
              date={`${order.date} às ${order.hour}`}
            />
          ))}
        </Orders>
      </MobileContent>
    </>
  );
};

export default OrdersHistory;
