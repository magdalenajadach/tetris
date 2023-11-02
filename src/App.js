import { Header } from "./components/Header/Header";
import {Game} from "./components/Game/Game"

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="game__container">
				<Game />
        <button>Score</button>
        <button>Start game</button>
      </section>
    </div>
  );
}

export default App;
