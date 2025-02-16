import useDragSourceMonitor from "./useDragSourceMonitor";
import useDragSourceConnector from "./useDragSourceConnector";
import useRegisteredDragSource from "./useRegisteredDragSource";
import useConnectDragSource from "./useConnectDragSource";

function useDrag(spec) {
  //创建监听器
  const monitor = useDragSourceMonitor();
  //创建连接
  const connector = useDragSourceConnector();
  //向DND系统中注册拖动源实例
  useRegisteredDragSource(spec, monitor, connector);
  return [{}, useConnectDragSource(connector)];
}

export default useDrag;
