const fetchRequest = (fetch, url, onSuccess) => fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
.then(response => response.json())
.then(body => onSuccess(body))
.catch((e) => {
  // console.error(e);
});

export function fetchContacts(fetch, url, dispatch, action) {
  return fetchRequest(
    fetch,
    url,
    body => dispatch(action(body))
  );
}
