import { useContext } from "react";
import { DndContext } from "../core";
function useDragDropManager() {
  const { dragDropManager } = useContext(DndContext);
  return dragDropManager;
}
export default useDragDropManager;
