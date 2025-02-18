import { useLayoutEffect } from "react";
import useDragDropManager from "../useDragDropManager";
import useDragSource from "./useDragSource";
import { useDragType } from "./useDragType";
import { registerSource } from "../../internals";

function useRegisteredDragSource(spec, monitor, connector) {
  const manager = useDragDropManager();
  const dragSource = useDragSource(spec, monitor, connector);
  const itemType = useDragType(spec);
  useLayoutEffect(function () {
    const handlerId = registerSource(itemType, dragSource, manager);
    monitor.receiveHandlerId(handlerId);
    connector.receiveHandlerId(handlerId);
    // console.log("dragSources", manager.globalMonitor.registry.dragSources);
    // console.log("types", manager.globalMonitor.registry.types);
  });
}

export default useRegisteredDragSource;
