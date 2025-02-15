class DragSourceMonitorImpl {
  internalMonitor;
  handlerId;
  constructor(manager) {
    this.internalMonitor = manager.getGlobalMonitor();
  }
  receiveHandlerId(handlerId) {
    this.handlerId = handlerId;
  }
}
export default DragSourceMonitorImpl;
