import { Service } from "../config.js";

export default {
  getAllOwners() {
    return fetch(Service.baseURL + "/Owners", {
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
  getOwner(id,token) {
    return fetch(Service.baseURL + "/Owners/" + id, {
      method: "GET",
      headers:  { 
        "Authorization": "Bearer "+ token,
      },
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  storeOwner(data, token) {
    //Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
    //Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/Owners", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": "Bearer "+ token,
      },
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
    Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
    return fetch(Service.baseURL + "/Owners/" + id, {
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
    return fetch(Service.baseURL + "/Owners/" + id, {
      method: "DELETE",
      headers: Service.headers,
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
};
