import useDragSourceMonitor from "./useDragSourceMonitor";
import useDragSourceConnector from "./useDragSourceConnector";

function useDrag(spec) {
  console.log(spec);
  //创建监听器
  const monitor = useDragSourceMonitor();
  console.log(monitor);
  //创建连接
  const connector = useDragSourceConnector();
  console.log(connector);
  return [{}, () => {}];
}

export default useDrag;
