import { Service } from "../config.js";

export default {
  get(token) {
    return fetch(Service.baseURL + "/Logins", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  getAllLogins() {
    return fetch(Service.baseURL + "/Logins", {
      method: "GET",
      headers: Service.headers,
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  getLogin(id, token) {
    return fetch(Service.baseURL + "/Logins/" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  getAcessToken(data) {
    return fetch(Service.baseURL + "/logins/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(function (response) {
      if (response.status != 201) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  store(data) {
    return fetch(Service.baseURL + "/logins/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(function (response) {
      if (response.status != 201) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  update(data, id, token) {
    return fetch(Service.baseURL + "/Logins/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + token,
      },
      body: JSON.stringify(data),
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response;
      }
    });
  },
  delete(id) {
    return fetch(Service.baseURL + "/Logins/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
};

export let idLogin = 1;
