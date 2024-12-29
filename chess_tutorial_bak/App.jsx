import { DndProvider } from "react-dnd";
import Example from "./example";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  );
};

export default App;
