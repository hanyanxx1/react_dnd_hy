import equal from "fast-deep-equal";
import { useState, useCallback, useLayoutEffect } from "react";

/**
 * 从监听器中收集属性并返回用来渲染组件
 * @param monitor 监听器
 * @param collect 收集器
 * @returns 收集到的属性
 */
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
