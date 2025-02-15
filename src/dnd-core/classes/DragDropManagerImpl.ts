class DragDropManagerImpl {
  store;
  backend;
  globalMonitor;
  constructor(store, globalMonitor) {
    this.store = store;
    this.globalMonitor = globalMonitor;
  }
  receiveBackend(backend) {
    this.backend = backend;
  }
  getBackend() {
    return this.backend;
  }
  getGlobalMonitor() {
    return this.globalMonitor;
  }
  getRegistry() {
    return this.globalMonitor.registry;
  }
}
export default DragDropManagerImpl;
