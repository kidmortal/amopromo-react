import { Stack } from "@chakra-ui/layout";
import { DragDropContext } from "react-beautiful-dnd";
import { AddNewItemModal } from "./components/board/AddNewItemModal";
import { Board } from "./components/board/Board";

function App() {
  return (
    <Stack className="App">
      <DragDropContext>
        <Board />
      </DragDropContext>
    </Stack>
  );
}

export default App;
