import { Container, Description, First } from "./styles";
import PropTypes from "prop-types";

const MobileProductAdminOrder = ({
  id,
  status,
  date,
  description,
  handleStatus,
}) => {
  return (
    <Container>
      <First>
        <span>{id}</span>
        <span>{date}</span>
      </First>
      <Description>{description}</Description>
      <select
        name="status"
        id="status"
        value={status}
        onChange={(e) => handleStatus(e.target.value, id)}
      >
        <option value="pending" defaultChecked>
          Pendente
        </option>
        <option value="preparing">Preparando</option>
        <option value="delivered">Entregue</option>
      </select>
    </Container>
  );
};

MobileProductAdminOrder.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  handleStatus: PropTypes.func,
};

export default MobileProductAdminOrder;
