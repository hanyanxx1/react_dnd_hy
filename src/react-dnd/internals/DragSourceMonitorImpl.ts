class DragSourceMonitorImpl {
  internalMonitor;
  constructor(manager) {
    this.internalMonitor = manager.getGlobalMonitor();
  }
}
export default DragSourceMonitorImpl;
