import useDragDropManager from "../useDragDropManager";
import useDragSource from "./useDragSource";
import { useDragType } from "./useDragType";

function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const handler = useDragSource(spec, monitor, connector);
  console.log("handler", handler);
  const itemType = useDragType(spec);
  console.log(itemType);
}

export default useRegisteredDragSource;
