import { Content, MobileContent, Orders } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import MobileProductAdminOrder from "../../components/MobileProductAdminOrder";
import TableSkeleton from "../../components/TableSkeleton";
import MobileSkeleton from "../../components/MobileSkeleton";

const OrdersAdminHistory = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrder = async () => {
    setIsLoading(true);
    const response = await api.get("/adminOrders", {
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
    setIsLoading(false);
  };

  const handleStatus = async (value, id) => {
    await api.put(
      `/adminOrders/${id}`,
      {
        status: value,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    fetchOrder();
  };

  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <>
      <Content>
        <h1>Histórico de pedidos</h1>
        {isLoading ? (
          <TableSkeleton />
        ) : orders.length ? (
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
              {orders &&
                orders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <select
                        name="status"
                        id="status_id"
                        value={order.status}
                        onChange={(e) => handleStatus(e.target.value, order.id)}
                      >
                        <option value="pending" defaultChecked>
                          Pendente
                        </option>
                        <option value="preparing">Preparando</option>
                        <option value="delivered">Entregue</option>
                      </select>
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
          <h1
            style={{
              textAlign: "center",
              color: "#ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            Nenhum pedido encontrado
          </h1>
        )}
      </Content>
      <MobileContent>
        <h1>Histórico de pedidos</h1>
        {isLoading ? (
          <MobileSkeleton />
        ) : orders.length ? (
          <Orders>
            {orders.map((order, index) => (
              <MobileProductAdminOrder
                key={index}
                status={order.status}
                id={String(order.id).padStart(5, "0")}
                description={order.description}
                date={`${order.date} às ${order.hour}`}
                handleStatus={handleStatus}
              />
            ))}
          </Orders>
        ) : (
          <h1
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              color: "#ccc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            Nenhum pedido encontrado
          </h1>
        )}
      </MobileContent>
    </>
  );
};

export default OrdersAdminHistory;
