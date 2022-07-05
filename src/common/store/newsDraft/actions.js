export const ACTION_ADD_NEWS_DRAFT = "ACTION_ADD_NEWS_DRAFT";
export const ACTION_DELETE_NEWS_DRAFT = "ACTION_DELETE_NEWS_DRAFT";
export const ACTION_EDIT_NEWS_DRAFT = "ACTION_EDIT_NEWS_DRAFT";
export const ACTION_GET_NEWS = "ACTION_GET_NEWS";

export function getNews(news) {
  return {
    type: ACTION_GET_NEWS,
    payload: news
  };
}

export function addItemDraft(titleRU, titleEN, descriptionRU, descriptionEN, author, date, type, hashtags) {
  return {
    type: ACTION_ADD_NEWS_DRAFT,
    payload: { titleRU, titleEN, descriptionRU, descriptionEN, author, date, type, hashtags}
  };
}

export function editItemDraft(id, titleRU, titleEN, descriptionRU, descriptionEN, type, hashtags) {
  return {
    type: ACTION_EDIT_NEWS_DRAFT,
    payload: { id, titleRU, titleEN, descriptionRU, descriptionEN, type, hashtags }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_NEWS_DRAFT,
    payload: id
  };
}