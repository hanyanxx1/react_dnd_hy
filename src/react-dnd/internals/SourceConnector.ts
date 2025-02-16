/*
 * 拖动连接器 连接一个真实DOM节点 另一头是ReactDND系统
 */
class SourceConnector {
  backend;
  handlerId; //拖动源唯一标识
  dragSourceRef; //DOM节点
  constructor(backend) {
    this.backend = backend;
  }
  get dragSource() {
    return this.dragSourceRef && this.dragSourceRef.current;
  }
  connect() {
    if (!this.handlerId || !this.dragSource) {
      return;
    }
    this.backend.connectDragSource(this.handlerId, this.dragSource);
  }
  receiveHandlerId(handlerId) {
    this.handlerId = handlerId;
    this.connect();
  }
  receiveDragSource = (dragSourceRef) => {
    this.dragSourceRef = dragSourceRef;
  };
}

export default SourceConnector;
