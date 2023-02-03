import { Background, Container, Text } from "./styles";
import Header from "../../components/Header";
import cookiesimg from "/cookies.svg";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Section from "../../components/Section";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Background>
          <img alt="cookies" src={cookiesimg} />
          <Text>
            <h1>Sabores inigualáveis</h1>
            <h5>Sinta o cuidado do preparo com ingredientes selecionados</h5>
          </Text>
        </Background>
        <Section title="Refeições">
          <Card
            title="arroz"
            image="/Imagens/Mask group-2.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
          />
        </Section>
        <Section title="Sobremesas">
          <Card
            title="arroz"
            image="/Imagens/Mask group-2.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
          />
        </Section>
        <Section title="Bebidas">
          <Card
            title="arroz"
            image="/Imagens/Mask group-2.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
            isAdmin
          />
          <Card
            title="arroz"
            image="/Imagens/Mask group-1.png"
            price="10,00"
            quantity={10}
            text="sakdmloksadnkl jkfnsldjfnlsdjnf jdnsfl dklsnflkfndlk"
          />
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
