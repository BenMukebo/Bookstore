// const APP_ID = '9oGCGsuz2srGR7ssHMEo';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/9oGCGsuz2srGR7ssHMEo';

/* eslint-disable-next-line import/prefer-default-export */
// export const fetchAllBooks = async () => {
//   const url = `${BASE_URL}/apps/${APP_ID}/books`;
//   const resp = await fetch(url, {
//     headers: {},
//   });
//   const data = JSON.parse(await resp.text() || '[]');
//   return data;
// };

export const createBook = async ({ id, title, category }) => { //POST
  const url = `${BASE_URL}/books`;
  const data = JSON.stringify({
    item_id: id,
    title,
    category,
  });
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  return response.text();
};

export const deleteBook = async (id) => {
  const url = `${BASE_URL}/books/${id}`;
  const data = JSON.stringify({
    item_id: id,
  });
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  return response.text();
};
