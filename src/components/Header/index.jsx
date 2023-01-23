import Anchor from "../Anchor";
import Input from "../Input";

const Header = () => {
  return (
    <div>
      <img src="/logo.svg" alt="logo" />
      <Anchor text="Meus favoritos" />
      <Input
        icon
        id="search"
        placeholder="Busque pelas opções de prato"
        type="text"
      />
    </div>
  );
};

export default Header;
