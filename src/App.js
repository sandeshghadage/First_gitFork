import "./App.css";
import React from "react";
import Counter from "./ReduxCounterApp/Counter";
import { Provider } from "react-redux";
import store from "./ReduxCounterApp/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
