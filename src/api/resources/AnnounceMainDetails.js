import { Service } from "../config.js";

export default {
  getAllAnnounceMainDetails() {
    return fetch(Service.baseURL + "/AnnounceMainDetails", {
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
  getAllAnnounceMainDetailsFromOwner(ownerId) {
    return fetch(Service.baseURL + "/AnnounceMainDetails/fromOwner/" + ownerId, {
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
  getAnnounceMainDetail(announceMainDetailId) {
    console.log(Service.baseURL + "/AnnounceMainDetails/" + announceMainDetailId);
    return fetch(
      Service.baseURL + "/AnnounceMainDetails/" + announceMainDetailId,
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
  getAllAnnounceAvailable() {
    return fetch(Service.baseURL + "/AnnounceMainDetails/available", {
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
    Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/AnnounceMainDetails", {
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
  update(data, announceId) {
    Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
    Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/AnnounceMainDetails/" + announceId, {
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
  deactivateAnnounce(data, announceId) {
    Service.headers.set("Content-Type", "multipart/form-data"); //for sending files to the server
    Service.headers.set("Authorization", "Bearer " + Service.token);
    return fetch(Service.baseURL + "/AnnounceMainDetails/deactivate/" + announceId, {
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
  delete(announceId) {
    return fetch(Service.baseURL + "/AnnounceMainDetails/" + announceId, {
      method: "DELETE",
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
