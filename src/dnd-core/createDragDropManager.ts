import { createStore } from "redux";
import reducer from "./reducers";
import DragDropManagerImpl from "./classes/DragDropManagerImpl";
import DragDropMonitorImpl from "./classes/DragDropMonitorImpl";
function createDragDropManager(backendFactory) {
  //创建redux仓库
  const store = createStore(reducer);
  const globalMonitor = new DragDropMonitorImpl(store);
  const manager = new DragDropManagerImpl(store, globalMonitor);
  const backend = backendFactory(manager);
  manager.receiveBackend(backend);
  return manager;
}
export default createDragDropManager;
