import { Service } from "../config.js";

export default {
  getAllTypes() {
    return fetch(Service.baseURL + "/RealEstateType", {
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
  getTypeByID(id) {
    return fetch(Service.baseURL + "/RealEstateType/" + id, {
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
