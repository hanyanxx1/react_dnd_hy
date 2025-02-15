import { useMemo } from "react";
export function useDragType(spec) {
  return useMemo(() => spec.type, [spec]);
}
