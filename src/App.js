import logo from "./logo.svg";
import "./App.css";
import { ChangeName, Counter, TaskList } from "./components/task_list";
import Gallery from "./components/Gallery/gallery";
import TextArea from "./components/Text Area/textArea";
import FormUi from "./components/Form/form";

function App() {
  return (
    <div className="App">
      {/* <FormUi /> */}
      <Gallery />
      <TextArea />
      {/* <TaskList /> */}
      {/* <Counter />
      <ChangeName /> */}
    </div>
  );
}

export default App;
