export const ACTION_EDIT_GROUP_CHAT = "ACTION_EDIT_GROUP_CHAT";

export function editItem(id, message) {
    return {
      type: ACTION_EDIT_GROUP_CHAT,
      payload: { id, message }
    };
}