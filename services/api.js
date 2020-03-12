const _toQueryString = params =>
  `?${Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&')}`;

// EDIT here if you prefer a storage implementation or a store subscription etc.
// you could actually also remove the getToken function and directly call it in the header below
const methods = {
  getToken: () => null,
};

const _makeCancelable = promise => {
  let hasCanceled = false;

  const cancelablePromise = () =>
    new Promise((resolve, reject) => {
      promise().then(
        val => (hasCanceled ? reject(Error('Request canceled')) : resolve(val)),
        error =>
          hasCanceled ? reject(Error('Request canceled')) : reject(error),
      );
    });

  return {
    cancelablePromise,
    cancel() {
      hasCanceled = true;
    },
  };
};

const _call = (method, route, params, setAbortMethod, auth) => {
  // EDIT you can always strip abortcontroller from here if you need different usages
  // since it can be tricky to handle the cancel function passed to setAbortMethod for specific usage
  // sadly this is the best I could think of
  const controller = AbortController ? new AbortController() : null;
  if (method === 'GET' && params) {
    route += _toQueryString(params);
  }
  const url = 'https://jsonplaceholder.typicode.com/' + route;
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(auth &&
        methods.getToken() && {
          Authorization: `Bearer ${methods.getToken()}`,
        }), // EDIT here based on your api
    },
    ...(params && method !== 'GET' && { body: JSON.stringify(params) }),
    ...(controller && { signal: controller.signal }),
  };
  const currentFetch = () => {
    return fetch(url, options).then(
      res => (res.ok ? res.json() : Promise.reject(res)), // ERROR handling highly depends on your api
    );
  };

  if (controller) {
    setAbortMethod && setAbortMethod(() => controller.abort());
    return currentFetch();
  } else {
    const { cancelablePromise, cancel } = _makeCancelable(currentFetch);
    setAbortMethod && setAbortMethod(cancel);
    return cancelablePromise();
  }
};

['POST', 'PUT', 'DELETE', 'PATCH', 'GET'].forEach(
  el => (methods[el.toLowerCase()] = (...data) => _call(el, ...data)),
);

export default methods;
