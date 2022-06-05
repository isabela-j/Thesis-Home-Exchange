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
  getAllOffersSavedByOwner(ownerId, token) {
    return fetch(Service.baseURL + "/OffersSaved/offersByOwner/" + ownerId, {
      method: "GET",
      headers: {
        "Authorization" : "Bearer " + token
      }
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
  store(data, token) {
    return fetch(Service.baseURL + "/OffersSaved", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
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
  delete(id, token) {
    return fetch(Service.baseURL + "/OffersSaved/" + id, {
      method: "DELETE",
      headers: {
      "Authorization": "Bearer " + token,
    },
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response;
      }
    });
  },
};
