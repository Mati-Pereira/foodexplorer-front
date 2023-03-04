import { Container, Description, First } from "./styles";
import PropTypes from "prop-types";
import OrderStatus from "../OrderStatus";

const MobileProductOrder = ({ id, status, date, description }) => {
  return (
    <Container>
      <First>
        <span>{id}</span>
        <OrderStatus status={status} />
        <span>{date}</span>
      </First>
      <Description>{description}</Description>
    </Container>
  );
};

MobileProductOrder.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default MobileProductOrder;
