class DragDropMonitorImpl {
  store;
  registry;
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
  subscribeToStateChange(listener) {
    // 最终listener传递给了redux仓库
    return this.store.subscribe(listener);
  }
  getSourceId() {
    // 其实这个地方应该取当前正在被拖动的源的handlerId
    return "S0";
  }
  isDraggingSource(handlerId) {
    return handlerId === this.getSourceId();
  }
}
export default DragDropMonitorImpl;
