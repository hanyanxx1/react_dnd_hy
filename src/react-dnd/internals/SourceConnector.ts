/*
 * 拖动连接器 连接一个真实DOM节点 另一头是ReactDND系统
 */
class SourceConnector {
  backend;
  constructor(backend) {
    this.backend = backend;
  }
  connect() {
    console.log("连接React和DOM");
  }
}

export default SourceConnector;
