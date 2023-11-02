import Header from "./components/Header/Header";
import Game from "./components/Game/Game";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <section className="game__container">
        <Game />
      </section>
    </div>
  );
};

export default App;
