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
  store(data) {
   // Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
   // Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/AnnounceUtilities", {
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
};
