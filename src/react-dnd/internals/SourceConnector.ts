/*
 * 拖动连接器 连接一个真实DOM节点 另一头是ReactDND系统
 */
class SourceConnector {
  backend;
  handlerId;
  constructor(backend) {
    this.backend = backend;
  }
  connect() {
    console.log("连接React和DOM");
  }
  receiveHandlerId(handlerId) {
    this.handlerId = handlerId;
  }
}

export default SourceConnector;
