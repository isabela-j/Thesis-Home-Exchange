import { Service } from "../config.js";

export default {
  getAllAnnounceUtilities() {
    return fetch(Service.baseURL + "/AnnounceUtilities", {
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
  getAnnounceUtility(announceUtilityId) {
    return fetch(Service.baseURL + "/AnnounceUtilities/" + announceUtilityId, {
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
  store(data, token) {
    return fetch(Service.baseURL + "/AnnounceUtilities", {
      method: "POST",
      headers:{ 
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
