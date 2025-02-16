class HTML5BackendImpl {
  dragStartSourceId;
  connectDragSource(handleId, node) {
    node.setAttribute("draggable", "true");
    node.addEventListener("dragstart", (e) =>
      this.handleDragStart(e, handleId),
    );
  }
  handleDragStart(e, handleId) {
    this.dragStartSourceId = handleId;
  }
}
export default HTML5BackendImpl;
