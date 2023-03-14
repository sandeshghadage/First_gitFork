import logo from "./logo.svg";
import "./App.css";
import { ChangeName, Counter, TaskList } from "./components/task_list";

function App() {
  return (
    <div className="App">
      <TaskList />
      {/* <Counter />
      <ChangeName /> */}
    </div>
  );
}

export default App;
