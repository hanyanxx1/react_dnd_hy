class DragDropMonitorImpl {
  store;
  registry;
  constructor(store, registry) {
    this.store = store;
    this.registry = registry;
  }
  subscribeToStateChange(listener) {
    return this.store.subscribe(listener);
  }
  getSourceId() {
    return "S0";
  }
  isDraggingSource(handlerId) {
    return handlerId === this.getSourceId();
  }
}
export default DragDropMonitorImpl;
