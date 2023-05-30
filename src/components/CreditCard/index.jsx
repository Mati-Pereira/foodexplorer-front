import { Container, SecondRow } from "./styles";
import { useState } from "react";
import InputOrder from "../InputOrder";
import Loading from "../Loading";
import Button from "../Button";
import pedidos from "/pedidos.svg";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearOrders } from "../../context/features/orders.slice";
import { creditCardSchema } from "../../validation/creditCard";

const CreditCard = () => {
  const {
    colors: { red_500 },
  } = useTheme();
  const [expire, setExpire] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orders = useSelector((state) => state.persisted.order.orders);

  const handleExpireChange = (event) => {
    const input = event.target.value;
    let formattedInput = input;
    formattedInput = formattedInput.replace(/\D/g, "");
    if (formattedInput.length > 2) {
      formattedInput = `${formattedInput.slice(0, 2)}/${formattedInput.slice(
        2
      )}`;
    }
    setExpire(formattedInput);
  };

  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, "");
    const formatted = input
      .substring(0, 16)
      .split("")
      .reduce((result, digit, index) => {
        if (index % 4 === 0 && index > 0) {
          result += " ";
        }
        result += digit;
        return result;
      }, "");

    setCardNumber(formatted);
  };

  const handleCvcChange = (event) => {
    const { value } = event.target;
    const formattedSSN = value.replace(/\D/g, "").substring(0, 3);
    setCvc(formattedSSN);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const description = orders.map((order) => {
        return `${order.quantity} x ${order.name}, `;
      });
      await creditCardSchema.validate({
        cardNumber,
        expire,
        cvc,
      });
      setIsLoading(true);
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
          navigate("/");
          dispatch(clearOrders());
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    } catch (err) {
      toast.error(err.message);
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputOrder
          id="card-number"
          label="Número do Cartão"
          placeholder="0000 0000 0000 0000"
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
        <SecondRow>
          <InputOrder
            id="card-holder"
            label="Validade"
            type="text"
            maxLength={5}
            placeholder="MM/YY"
            onChange={handleExpireChange}
            value={expire}
          />
          <InputOrder
            id="card-cvc"
            label="CVC"
            type="text"
            maxLength={3}
            placeholder="000"
            onChange={handleCvcChange}
            value={cvc}
          />
        </SecondRow>

        <Button color={red_500} type="submit">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <img src={pedidos} alt="icon pedidos" />
              <span>Pedido</span>
            </>
          )}
        </Button>
      </form>
    </Container>
  );
};

export default CreditCard;
