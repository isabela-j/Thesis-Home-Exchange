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
  getAllOffersSentByOwner(ownerId) {
    return fetch(Service.baseURL + "/OffersSentAndReceived/offersSentByOwner/" + ownerId, {
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
  getOfferSentAndReceived(offerSentAndReceivedId) {
    return fetch(Service.baseURL + "/OffersSentAndReceived/" + offerSentAndReceivedId ,{
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
  update(data, offerSentAndReceivedId) {
    Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
    Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/OffersSentAndReceived/" + offerSentAndReceivedId, {
      method: "PATCH",
      headers: Service.headers,
      body: data,
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
    return fetch(Service.baseURL + "/OffersSentAndReceived", {
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
