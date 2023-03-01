import { Container } from "./styles";
import { FaCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const OrderStatus = ({ status }) => {
  const whatIsTheColor = () => {
    switch (status) {
      case "pending":
        return "red";
      case "readying":
        return "yellow";
      case "delivered":
        return "green";
    }
  };

  const whatIsTheTitle = () => {
    switch (status) {
      case "pending":
        return "Pendente";
      case "readying":
        return "Preparando";
      case "delivered":
        return "Entregue";
    }
  };

  return (
    <Container>
      <FaCircle color={whatIsTheColor()} size={10} />
      {whatIsTheTitle()}
    </Container>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.string,
};

export default OrderStatus;
