import { Service } from "../config.js";

export default {
  getAllDistributions() {
    return fetch(Service.baseURL + "/RealEstateDistributions", {
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
  getDistributionByID(id) {
    return fetch(Service.baseURL + "/RealEstateDistributions/" + id, {
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
