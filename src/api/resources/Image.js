import { Service } from "../config.js";

export default {
  getAllImages() {
    return fetch(Service.baseURL + "/Images", {
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
  getAnnounceImages(announceMainDetailId) {
    return fetch(Service.baseURL + "/Images/" + announceMainDetailId, {
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
  store(data,token) {
    return fetch(Service.baseURL + "/Images", {
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
};
