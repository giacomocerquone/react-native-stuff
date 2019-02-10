class Api {
  static headers() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      dataType: 'json',
    };
  }

  static get(route, auth = {}) {
    return this.call(route, null, 'GET', auth);
  }

  static put(route, params) {
    return this.call(route, params, 'PUT');
  }

  static patch(route, params, auth = {}) {
    return this.call(route, params, 'PATCH', auth);
  }

  static post(route, params, auth = {}) {
    return this.call(route, params, 'POST', auth);
  }

  static delete(route, auth = {}) {
    return this.call(route, null, 'DELETE', auth);
  }

  static call(route, params, verb, auth) {
    const host =
      'https://thingproxy.freeboard.io/fetch/https://sandbox-api.latruccheria.it/';
    /* eslint no-undef: 0 */
    /*  if (__DEV__) {
      host = 'https://sandbox-api.latruccheria.it/';
    } */
    const url = host + route;

    const options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null,
    );
    options.headers = Object.assign(Api.headers(), auth);
    return fetch(url, options).then(resp => {
      const json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {
        // Need this because in the API status is not always sent
        const error = err;
        error.code = resp.status;
        throw error;
      });
    });
  }
}

export default Api;
