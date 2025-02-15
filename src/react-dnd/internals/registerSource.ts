function registerSource(type, dragSource, manager) {
  const registry = manager.getRegistry();
  const sourceId = registry.addSource(type, dragSource);
  return sourceId;
}

export default registerSource;
