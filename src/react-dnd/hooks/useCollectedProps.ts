import equal from "fast-deep-equal";
import { useState, useCallback, useLayoutEffect } from "react";

export function useCollectedProps(monitor, collect) {
  const [collected, setCollected] = useState(() => collect(monitor));
  const updateCollected = useCallback(() => {
    const nextValue = collect(monitor);
    if (!equal(collected, nextValue)) {
      setCollected(nextValue);
    }
  }, [collect, collected, monitor]);
  useLayoutEffect(
    function () {
      return monitor.subscribeToStateChange(updateCollected);
    },
    [monitor, updateCollected],
  );
  return collected;
}
