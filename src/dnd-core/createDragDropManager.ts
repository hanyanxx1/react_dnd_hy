import { createStore } from "redux";
import reducer from "./reducers";
import DragDropManagerImpl from "./classes/DragDropManagerImpl";
import DragDropMonitorImpl from "./classes/DragDropMonitorImpl";
import HandlerRegistryImpl from "./classes/HandlerRegistryImpl";
function createDragDropManager(backendFactory) {
  //创建redux仓库
  const store = createStore(reducer);
  //创建注册表
  const registry = new HandlerRegistryImpl(store);
  //创建全局监听器
  const globalMonitor = new DragDropMonitorImpl(store, registry);
  //创建管理器
  const manager = new DragDropManagerImpl(store, globalMonitor);
  //创建后端
  const backend = backendFactory(manager);
  //将后端添加到管理器中
  manager.receiveBackend(backend);
  return manager;
}
export default createDragDropManager;
