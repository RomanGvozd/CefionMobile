export const ACTION_ADD_NEWS_REVIEW = "ACTION_ADD_NEWS_REVIEW";
export const ACTION_DELETE_NEWS_REVIEW = "ACTION_DELETE_NEWS_REVIEW";
export const ACTION_EDIT_NEWS_REVIEW = "ACTION_EDIT_NEWS_REVIEW";
export const ACTION_GET_NEWS = "ACTION_GET_NEWS";

export function getNews(news) {
  return {
    type: ACTION_GET_NEWS,
    payload: news
  };
}

export function addItemReview(titleRU, titleEN, descriptionRU, descriptionEN, author, date, type, hashtags) {
  return {
    type: ACTION_ADD_NEWS_REVIEW,
    payload: { titleRU, titleEN, descriptionRU, descriptionEN, author, date, type, hashtags}
  };
}

export function editItemReview(id, titleRU, titleEN, descriptionRU, descriptionEN, type, hashtags) {
  return {
    type: ACTION_EDIT_NEWS_REVIEW,
    payload: { id, titleRU, titleEN, descriptionRU, descriptionEN, type, hashtags }
  };
}

export function deleteItem(id) {
  return {
    type: ACTION_DELETE_NEWS_REVIEW,
    payload: id
  };
}