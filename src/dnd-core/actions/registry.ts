export const ADD_SOURCE = "dnd-core/ADD_SOURCE";
export function addSource(handlerId) {
  return {
    type: ADD_SOURCE,
    payload: { handlerId },
  };
}
