import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Juego } from "./components/Juego.jsx";
import { jump } from "./reglas.js";

function App() {
  return (
    <div onClick={() => jump()}>
      <Header />
      <Juego />
      <Footer />
    </div>
  );
}

export default App;
