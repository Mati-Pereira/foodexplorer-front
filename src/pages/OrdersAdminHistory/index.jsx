import { Container, Content } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const OrdersAdminHistory = () => {
  const [orders, setOrders] = useState([]);
  console.log("orders", orders);

  const fetchOrder = async () => {
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
    <Container>
      <Header />
      <Content>
        <h1>Histórico de pedidos</h1>
        {orders.length ? (
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
                    <select
                      name="status"
                      id="status"
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
      <Footer />
    </Container>
  );
};

export default OrdersAdminHistory;
