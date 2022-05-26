import { Service } from "../config.js";

export default {
  getAllOwnerTypes() {
    return fetch(Service.baseURL + "/OwnerTypes", {
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
  getOwnerType(id) {
    return fetch(Service.baseURL + "/OwnerTypes/" + id, {
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

};
