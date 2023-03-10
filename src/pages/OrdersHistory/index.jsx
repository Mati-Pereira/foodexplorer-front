import { Content, MobileContent, Orders } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import OrderStatus from "../../components/OrderStatus";
import MobileProductOrder from "../../components/MobileProductOrder";
import TableSkeleton from "../../components/TableSkeleton";
import MobileSkeleton from "../../components/MobileSkeleton";

const OrdersHistory = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      setIsLoading(true);
      const response = await api.get("/orders", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      const data = response.data;
      const newData = data.map((data) => {
        const time = data.updated_at.split("T");
        console.log(time);
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
      setIsLoading(false);
    };
    fetchOrder();
  }, []);
  return (
    <>
      <Content>
        <h1>Histórico de pedidos</h1>
        {isLoading ? (
          <TableSkeleton />
        ) : orders.length > 0 ? (
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
        ) : (
          <h2
            style={{
              textAlign: "center",
              marginTop: "5rem",
              color: "#ccc",
              fontWeight: "400",
              fontFamily: "Poppins",
            }}
          >
            Nenhum pedido foi encontrado
          </h2>
        )}
      </Content>
      <MobileContent>
        <h1>Histórico de pedidos</h1>
        {isLoading ? (
          <MobileSkeleton />
        ) : orders.length ? (
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
        ) : (
          <h2
            style={{
              textAlign: "center",
              marginTop: "5rem",
              color: "#ccc",
              fontWeight: "400",
              fontFamily: "Poppins",
            }}
          >
            Nenhum pedido foi encontrado
          </h2>
        )}
      </MobileContent>
    </>
  );
};

export default OrdersHistory;
