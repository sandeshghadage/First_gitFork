import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Responsive-Navbar/Navbar";
import ScrollerUi from "./components/Horizontal-Scroller/scroller";
import GameUi from "./components/Tic-Tac-Toe/game";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <ScrollerUi />
      <GameUi />
    </div>
  );
}

export default App;
