export const ACTION_ADD_CHAT= "ACTION_ADD_CHAT";
export const ACTION_DELETE_CHAT = "ACTION_DELETE_CHAT";
export const ACTION_EDIT_CHAT = "ACTION_EDIT_CHAT";
// export const ACTION_GET_CHAT = "ACTION_GET_CHAT";

// export function getNews(news) {
//   return {
//     type: ACTION_GET_NEWS,
//     payload: news
//   };
// }

export function addItem(title, users, date, type, message) {
  return {
    type: ACTION_ADD_CHAT,
    payload: { title, users, date, type, message}
  };
}

export function editItem(id, message) {
  return {
    type: ACTION_EDIT_CHAT,
    payload: { id, message }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_CHAT,
    payload: id
  };
}