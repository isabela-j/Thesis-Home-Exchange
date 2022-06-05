import { Service } from "../config.js";

export default {
    getAllOffersSentAndReceived() {
    return fetch(Service.baseURL + "/OffersSentAndReceived", {
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
  getAllOffersSentByOwner(ownerId, token) {
    return fetch(Service.baseURL + "/OffersSentAndReceived/offersSentByOwner/" + ownerId, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token,
      }
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  getOfferSentAndReceived(offerSentAndReceivedId, token) {
    return fetch(Service.baseURL + "/OffersSentAndReceived/" + offerSentAndReceivedId ,{
      method: "GET",
      headers: {
        "Authorization": "Bearer " + token,
      }
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  update(data, offerSentAndReceivedId, token) {
    return fetch(Service.baseURL + "/OffersSentAndReceived/" + offerSentAndReceivedId, {
      method: "PATCH",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token },
      body: JSON.stringify(data),
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response;
      }
    });
  },
  store(data, token) {
    return fetch(Service.baseURL + "/OffersSentAndReceived", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token },
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
    return fetch(Service.baseURL + "/OffersSentAndReceived/" + id, {
      method: "DELETE",
      headers: {
      "Authorization": "Bearer " + token
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
