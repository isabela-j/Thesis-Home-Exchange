import { Service } from "../config.js";

export default {
  getAllOffersSaved() {
    return fetch(Service.baseURL + "/OffersSaved", {
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
  getAllOffersSavedByOwner(ownerId) {
    return fetch(Service.baseURL + "/OffersSaved/offersByOwner/" + ownerId, {
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
  getOfferSaved(offerSavedId) {
    return fetch(Service.baseURL + "/OffersSaved/" + offerSavedId, {
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
  //  Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/OffersSaved", {
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
