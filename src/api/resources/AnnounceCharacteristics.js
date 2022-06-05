import { Service } from "../config.js";

export default {
  getAllAnnounceCharacteristics() {
    return fetch(Service.baseURL + "/AnnounceCharacteristics", {
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
  getAnnounceCharacteristics(announceCharacteristicId) {
    return fetch(
      Service.baseURL + "/AnnounceCharacteristics/" + announceCharacteristicId,
      {
        method: "GET",
        headers: Service.headers,
      }
    ).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  store(data, token) {
    return fetch(Service.baseURL + "/AnnounceCharacteristics", {
      method: "POST",
      headers: { 
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
  update(data, announceCharacteristicId) {
    Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
    Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(
      Service.baseURL + "/AnnounceCharacteristics/" + announceCharacteristicId,
      {
        method: "PATCH",
        headers: Service.headers,
        body: data,
      }
    ).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  delete(announceCharacteristicId) {
    return fetch(
      Service.baseURL + "/AnnounceCharacteristics/" + announceCharacteristicId,
      {
        method: "DELETE",
        headers: Service.headers,
      }
    ).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
};
