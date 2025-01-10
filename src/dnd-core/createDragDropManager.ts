import { createStore } from "redux";
import reducer from "./reducers";
import DragDropManagerImpl from "./classes/DragDropManagerImpl";

function createDragDropManager(backendFactory) {
  //创建redux仓库
  const store = createStore(reducer);
  const manager = new DragDropManagerImpl(store);
  const backend = backendFactory(manager);
  manager.receiveBackend(backend);
  return manager;
}

export default createDragDropManager;
