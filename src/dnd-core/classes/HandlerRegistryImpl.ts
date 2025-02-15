import { HandlerRole } from "./../interfaces";
import { getNextUniqueId } from "../utils";
import { addSource } from "../actions/registry";

class HandlerRegistryImpl {
  store; //redux仓库
  types = new Map(); //不同handlerId的类型
  dragSources = new Map(); //拖放来源

  constructor(store) {
    this.store = store;
  }
  addSource(type, source) {
    const handlerId = this.addHandler(HandlerRole.SOURCE, type, source);
    this.store.dispatch(addSource(handlerId));
    return handlerId;
  }
  addHandler(role, type, handler) {
    const handlerId = getNextHandlerId(role);
    this.types.set(handlerId, type);
    if (role === HandlerRole.SOURCE) {
      this.dragSources.set(handlerId, handler);
    }
    return handlerId;
  }
}

function getNextHandlerId(role) {
  const id = getNextUniqueId().toString();
  switch (role) {
    case HandlerRole.SOURCE:
      return `S${id}`;
    case HandlerRole.TARGET:
      return `T${id}`;
    default:
      throw new Error(`Unknown Handler Role: ${role}`);
  }
}

export default HandlerRegistryImpl;
