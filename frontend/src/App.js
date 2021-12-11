import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen/>} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default App;
