import { useEffect, useMemo } from "react";
import { DragSourceImpl } from "./DragSourceImpl";

function useDragSource(spec, monitor, connector) {
  const handler = useMemo(() => {
    return new DragSourceImpl(spec, monitor, connector);
  }, [menubar, connector]);

  useEffect(() => {
    handler.spec = spec;
  }, [handler, spec]);

  return handler;
}

export default useDragSource;
