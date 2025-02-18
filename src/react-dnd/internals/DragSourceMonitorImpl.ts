class DragSourceMonitorImpl {
  internalMonitor;
  handlerId;
  constructor(manager) {
    this.internalMonitor = manager.getGlobalMonitor();
  }
  receiveHandlerId(handlerId) {
    this.handlerId = handlerId;
  }
  subscribeToStateChange(listener) {
    return this.internalMonitor.subscribeToStateChange(listener);
  }
  isDragging() {
    return this.internalMonitor.isDraggingSource(this.handlerId);
  }
}
export default DragSourceMonitorImpl;
