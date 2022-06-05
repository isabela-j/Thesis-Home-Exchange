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
  getAllAnnounceMainDetailsFromOwner(ownerId, token) {
    return fetch(Service.baseURL + "/AnnounceMainDetails/fromOwner/" + ownerId, {
      method: "GET",
      headers: { 
        "Authorization": "Bearer "+ token,
      },
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  getAnnounceMainDetail(announceMainDetailId,token) {
    return fetch(
      Service.baseURL + "/AnnounceMainDetails/" + announceMainDetailId,
      {
        method: "GET",
        headers: { 
          "Authorization": "Bearer "+ token,
        },
      }
    ).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  getAllAnnounceAvailable(token) {
    return fetch(Service.baseURL + "/AnnounceMainDetails/available", {
      method: "GET",
      headers: { 
        "Authorization": "Bearer "+ token,
      },
    }).then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.json();
      }
    });
  },
  store(data,token) {
    return fetch(Service.baseURL + "/AnnounceMainDetails", {
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
  update(data, announceId) {
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
