import useDragSourceMonitor from "./useDragSourceMonitor";

function useDrag(spec) {
  console.log(spec);
  const monitor = useDragSourceMonitor();
  console.log(monitor);
  return [{}, () => {}];
}

export default useDrag;
