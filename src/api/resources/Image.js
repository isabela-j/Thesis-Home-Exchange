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
  store(data) {
    Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
    Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/Images", {
      method: "POST",
      headers: Service.headers,
      body: data,
    }).then(function (response) {
      if (response.status != 201) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
};
