import { Service } from "../config.js";

export default {
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
  getLogin(id) {
    return fetch(Service.baseURL + "/Logins/" + id, {

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
  store(data) {
    Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
    //Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/Logins", {
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
  update(data, id) {
    Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
  //  Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/Logins/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
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
  }
};

export let idLogin = 1;