import { Container } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
const DetailsAnchor = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <IoIosArrowBack />
      <span>voltar</span>
    </Container>
  );
};

export default DetailsAnchor;
