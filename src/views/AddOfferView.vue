<template>
  <div style="position: relative">
    <v-main>
      <v-container class="container-custom" fluid>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div>
                <v-label> Add your offer here: </v-label>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Title and description</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert title"
                    hide-details="auto"
                    variant="underlined"
                    v-model="title"
                  />
                  <v-textarea
                    id="suggestMessage"
                    label="Description"
                    hide-details="auto"
                    v-model="defaultText"
                    class="v-textarea"
                  ></v-textarea>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Type</label>
                <div style="margin: 0.4em">
                  <v-btn
                    v-if="!btnHouse"
                    class="btn btnNormal"
                    @click="CheckBtn('house')"
                  >
                    house</v-btn
                  >
                  <v-btn
                    v-else
                    class="btn btnClicked"
                    @click="CheckBtn('house')"
                    >house
                  </v-btn>
                  <v-btn
                    v-if="!btnApartment"
                    class="btn btnNormal"
                    @click="CheckBtn('apartment')"
                  >
                    apartment</v-btn
                  >
                  <v-btn
                    v-else
                    class="btn btnClicked"
                    @click="CheckBtn('apartment')"
                  >
                    apartment</v-btn
                  >
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Street</label>
                <div style="margin: 0.4em">
                  <v-select
                    :items="location"
                    label="choose offer location"
                    v-model="offerLocation"
                    persistent-hint
                    return-object
                    single-line
                  ></v-select>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Price</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert price"
                    hide-details="auto"
                    variant="underlined"
                    v-model="price"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Bedrooms</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert number of bedrooms"
                    hide-details="auto"
                    variant="underlined"
                    v-model="bedsNo"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Bathrooms</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert number of bathrooms"
                    hide-details="auto"
                    variant="underlined"
                    v-model="bathsNo"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Partition</label>
                <div style="margin: 0.4em">
                  <v-btn
                    v-if="!btnDetached"
                    class="btn btnNormal"
                    @click="CheckBtn('detached')"
                  >
                    detached
                  </v-btn>
                  <v-btn
                    v-else
                    class="btn btnClicked"
                    @click="CheckBtn('detached')"
                  >
                    detached</v-btn
                  >
                  <v-btn
                    v-if="!btnSemi"
                    class="btn btnNormal"
                    @click="CheckBtn('semi')"
                  >
                    semi-detached
                  </v-btn>
                  <v-btn
                    v-else
                    class="btn btnClicked"
                    @click="CheckBtn('semi')"
                  >
                    semi-detached</v-btn
                  >
                  <v-btn
                    v-if="!btnUncompartmented"
                    class="btn btnNormal"
                    @click="CheckBtn('uncompartmented')"
                  >
                    uncompartmented</v-btn
                  >
                  <v-btn
                    v-else
                    class="btn btnClicked"
                    @click="CheckBtn('uncompartmented')"
                  >
                    uncompartmented</v-btn
                  >
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Floor</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert number of floor"
                    hide-details="auto"
                    variant="underlined"
                    v-model="floorNo"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Total building floors</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert number of floors"
                    hide-details="auto"
                    variant="underlined"
                    v-model="buildFloors"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Parking lots</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert number of parking lots if they exist"
                    hide-details="auto"
                    variant="underlined"
                    v-model="parkingNo"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Sqft</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert the sqft"
                    hide-details="auto"
                    variant="underlined"
                    v-model="sqft"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Balcony</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert number of balconies if they exist"
                    hide-details="auto"
                    variant="underlined"
                    v-model="balconies"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Construction year</label>
                <div style="margin: 0.4em">
                  <v-text-field
                    label="insert an approximate year"
                    hide-details="auto"
                    variant="underlined"
                    v-model="constructionYear"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Utilities</label>
                <div style="margin: 0.4em">
                  <v-checkbox
                    label="electrical curent"
                    v-model="electricalCurent"
                    hide-details
                  >
                  </v-checkbox>
                  <v-checkbox
                    label="water pipe"
                    v-model="waterPipe"
                    hide-details
                  >
                  </v-checkbox>
                  <v-checkbox label="sewerage" v-model="sewerage" hide-details>
                  </v-checkbox>
                  <v-checkbox label="gas pipe" v-model="gasPipe" hide-details>
                  </v-checkbox>
                  <v-checkbox
                    label="thermal power station"
                    v-model="thermalStation"
                    hide-details
                  >
                  </v-checkbox>
                  <v-checkbox
                    label="new radiators"
                    v-model="newRadiators"
                    hide-details
                  >
                  </v-checkbox>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Features</label>
                <div style="margin: 0.4em">
                  <v-checkbox
                    label="modern furniture"
                    v-model="modernFurniture"
                    hide-details
                  >
                  </v-checkbox>
                  <v-checkbox
                    label="electric stove"
                    v-model="electricStove"
                    hide-details
                  >
                  </v-checkbox>
                  <v-checkbox
                    label="washing machine"
                    v-model="washingMachine"
                    hide-details
                  >
                  </v-checkbox>
                  <v-checkbox
                    label="dishwasher"
                    v-model="dishwasher"
                    hide-details
                  >
                  </v-checkbox>
                  <v-checkbox label="garage" v-model="garage" hide-details>
                  </v-checkbox>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <v-card>
              <div style="display: flex; flex-direction: column">
                <label>Pics</label>
                <div style="margin: 0.5em">
                  <v-file-input
                    multiple
                    v-model="pictures"
                    label="Upload files"
                    prepend-icon="mdi-camera"
                    accept="image/*"
                    @change="handleFileUpload($event)"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col key="1">
            <div class="right">
              <v-btn class="btn-next" @click="postOffer">Post offer</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
  <div
    id="alert"
    style="
      position: absolute;
      align-self: center;
      position: fixed;
      display: none;
      bottom: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <v-alert density="default" :type="alertType" closable>
      {{ alertMessage }}
    </v-alert>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import AnnounceMainDetailsAPI from "@/api/resources/AnnounceMainDetails.js";
import AnnounceCharacteristicsAPI from "@/api/resources/AnnounceCharacteristics.js";
import AnnounceUtilityAPI from "@/api/resources/AnnounceUtility.js";
import AnnounceFeatureAPI from "@/api/resources/AnnounceFeature.js";
import ImageAPI from "@/api/resources/Image.js";
import { useStore } from 'vuex';
export default {
  name: "AddOfferView",
  created(){
    this.loadPage();
  },
  setup() {
    let currentOwnerId = ref();
    let defaultText = ref(
      "Please write here a short description about the house/apartment you want to exchange. In this way we will cover some features we may didn't included and will help the potential buyer to make a better idea about your announce :)"
    );
    let mainDetails = reactive({
      ownerId: 0,
      bedroomsNo: 0,
      bathroomsNo: 0,
      title: "",
      price: 0,
      squareMeters: 0,
      parkingLotsNo: 0,
      announceStatus: 0,
      fullDescription: "",
      fullAddress: "",
    });
    let announceCharacteristic = reactive({});
    let announceUtilities = reactive({});
    let announceFeatures = reactive({});
    let title = ref();
    let btnHouse = ref(false);
    let btnApartment = ref(false);
    let price = ref();
    let bedsNo = ref();
    let bathsNo = ref();
    let btnDetached = ref(false);
    let btnSemi = ref(false);
    let btnUncompartmented = ref(false);
    let floorNo = ref();
    let buildFloors = ref();
    let parkingNo = ref();
    let sqft = ref();
    let electricalCurent = ref(false);
    let waterPipe = ref(false);
    let sewerage = ref(false);
    let gasPipe = ref(false);
    let thermalStation = ref(false);
    let newRadiators = ref(false);
    let underfloorHeating = ref(false);
    let modernFurniture = ref(false);
    let electricStove = ref(false);
    let washingMachine = ref(false);
    let dishwasher = ref(false);
    let garage = ref(false);
    let balconies = ref();
    let constructionYear = ref();
    let yourName = ref();
    let phoneNo = ref();
    let email = ref();
    let pictures = ref([]);
    let offerLocation = ref("Centru");
    let pics = reactive([]);
    let location = ref([
      "Andrei Muresanu",
      "Becas",
      "Borhanci",
      "Bulgaria",
      "Buna Ziua",
      "Centru",
      "Dambul Rotund",
      "Europa",
      "Faget",
      "Gheorgheni",
      "Gradini Manastur",
      "Grigorescu",
      "Gruia",
      "Iris",
      "Intre Lacuri",
      "Manastur",
      "Marasti",
      "Someseni",
      "Sopor",
      "Zorilor",
    ]);
    let loadPage = () => {
        currentOwnerId.value = store.state.ownerId;
    }
    let GoToLocation = (location) => {
      window.location = location;
    };
    let CheckBtn = (type) => {
      if (type == "house" && !btnHouse.value) {
        btnHouse.value = !btnHouse.value;
        btnApartment.value = !btnHouse.value;
      } else if (type == "apartment" && !btnApartment.value) {
        btnApartment.value = !btnApartment.value;
        btnHouse.value = !btnApartment.value;
      } else if (type == "detached" && !btnDetached.value) {
        btnDetached.value = !btnDetached.value;
        btnSemi.value = !btnDetached.value;
        btnUncompartmented.value = !btnDetached.value;
      } else if (type == "semi" && !btnSemi.value) {
        btnSemi.value = !btnSemi.value;
        btnDetached.value = !btnSemi.value;
        btnUncompartmented.value = !btnSemi.value;
      } else if (type == "uncompartmented" && !btnUncompartmented.value) {
        btnUncompartmented.value = !btnUncompartmented.value;
        btnSemi.value = !btnUncompartmented.value;
        btnDetached.value = !btnUncompartmented.value;
      }
    };
    let setMainDetails = () => {
      mainDetails.ownerId = currentOwnerId.value;
      mainDetails.bedroomsNo = isNaN(parseInt(bedsNo.value))
        ? 0
        : parseInt(bedsNo.value);
      mainDetails.bathroomsNo = isNaN(parseInt(bathsNo.value))
        ? 0
        : parseInt(bathsNo.value);
      mainDetails.title = title.value;
      mainDetails.price = isNaN(parseInt(price.value))
        ? 0
        : parseInt(price.value);
      mainDetails.squareMeters = isNaN(parseInt(sqft.value))
        ? 0
        : parseInt(sqft.value);
      mainDetails.fullDescription = defaultText.value;
      mainDetails.parkingLotsNo = isNaN(parseInt(parkingNo.value))
        ? 0
        : parseInt(parkingNo.value);
      mainDetails.fullAddress = offerLocation.value;
    };
    let setCharacteristics = () => {
      announceCharacteristic.floorNo = isNaN(parseInt(floorNo.value))
        ? 0
        : parseInt(floorNo.value);
      announceCharacteristic.totalBuildingFloors = isNaN(
        parseInt(buildFloors.value)
      )
        ? 0
        : parseInt(buildFloors.value);
      announceCharacteristic.constructionYear = isNaN(
        parseInt(constructionYear.value)
      )
        ? 0
        : parseInt(constructionYear.value);
      announceCharacteristic.balconyNo = isNaN(parseInt(balconies.value))
        ? 0
        : parseInt(balconies.value);
      if (btnDetached.value === true) {
        announceCharacteristic.realEstateDistributionId = 1;
      } else if (btnSemi.value === true) {
        announceCharacteristic.realEstateDistributionId = 2;
      } else {
        announceCharacteristic.realEstateDistributionId = 3;
      }
      btnHouse.value === true
        ? (announceCharacteristic.realEstateTypeId = 1)
        : (announceCharacteristic.realEstateTypeId = 2);
    };
    let setUtilities = () => {
      announceUtilities.electricalCurrent = electricalCurent.value;
      announceUtilities.waterPipe = waterPipe.value;
      announceUtilities.sewerage = sewerage.value;
      announceUtilities.gasPipe = gasPipe.value;
      announceUtilities.thermalPowerStationOwn = thermalStation.value;
      announceUtilities.newRadiators = newRadiators.value;
    };
    let setFeatures = () => {
      announceFeatures.modernFurniture = modernFurniture.value;
      announceFeatures.electricStove = electricStove.value;
      announceFeatures.washingMachine = washingMachine.value;
      announceFeatures.dishWasher = dishwasher.value;
      announceFeatures.garage = garage.value;
    };
    let postOffer = async () => {
      try {
        setMainDetails();
        let res = await AnnounceMainDetailsAPI.store(mainDetails, store.state.accessToken);
        announceCharacteristic.announceMainDetailId = JSON.parse(res.id);
        setCharacteristics();
        let res2 = await AnnounceCharacteristicsAPI.store(
          announceCharacteristic,
          store.state.accessToken
        );
        setUtilities();
        announceUtilities.announceMainDetailId = JSON.parse(res.id);
        let res3 = await AnnounceUtilityAPI.store(announceUtilities, store.state.accessToken);
        setFeatures();
        announceFeatures.announceMainDetailId = JSON.parse(res.id);
        let res4 = await AnnounceFeatureAPI.store(announceFeatures, store.state.accessToken);
        displayAlert("Your announce has been posted successfully!", "success");

        pics.forEach(async (pic) => {
          let picObj = {
            announceMainDetailId: JSON.parse(res.id),
            imageData: pic
          };
          let resImg = await ImageAPI.store(picObj, store.state.accessToken);
        })
      } catch (error) {
        displayAlert(
          "Your announce couldn't be posted . Please try again later.",
          "error"
        );
      }
    };
    let alertType = ref("warning");
    let alertMessage = ref("");
    let displayAlert = (message, type) => {
      alertType.value = type;
      alertMessage.value = message;
      document.getElementById("alert").style.display = "block";
      setTimeout(function () {
        document.getElementById("alert").style.display = "none";
      }, 5000);
    };
    let handleFileUpload = (e) => {
      pics.splice(0);
      let files = Array.from(e.target.files);
      files.forEach(file => {
         var reader = new FileReader();
         reader.onloadend = function () {
        pics.push(reader.result);
      };
      reader.readAsDataURL(file);
      })
      console.log(pics);
    };
    const store = useStore();
    return {
      currentOwnerId,
      defaultText,
      title,
      GoToLocation,
      location,
      btnHouse,
      btnApartment,
      bedsNo,
      bathsNo,
      btnDetached,
      btnSemi,
      btnUncompartmented,
      floorNo,
      parkingNo,
      sqft,
      electricalCurent,
      waterPipe,
      sewerage,
      gasPipe,
      thermalStation,
      newRadiators,
      underfloorHeating,
      modernFurniture,
      electricStove,
      washingMachine,
      dishwasher,
      garage,
      CheckBtn,
      balconies,
      constructionYear,
      yourName,
      phoneNo,
      email,
      offerLocation,
      pictures,
      postOffer,
      price,
      setMainDetails,
      buildFloors,
      alertType,
      alertMessage,
      displayAlert,
      handleFileUpload,
      pics,
      loadPage
    };
  },
};
</script>

<style scoped>
.container-custom {
  background-color: rgb(229, 229, 229);
}

.right {
  float: right;
}

::v-deep(.v-text-field .v-field__input) {
  color: rgb(1, 83, 81);
}
::v-deep(.v-text-field .v-field__outline) {
  color: rgb(0, 0, 0);
}
::v-deep(.v-textarea .v-field__input) {
  color: rgb(1, 83, 81);
}

::v-deep(.v-textarea .v-field__field) {
  background-color: white;
}

::v-deep(.v-checkbox .v-label) {
  font-size: 1em;
}
label {
  color: rgb(252, 158, 1);
  margin: 0.2em;
  margin-left: 0.6em;
}
.btn {
  border-radius: 50px;
  border: 2.5px solid rgb(1, 83, 81);
  text-transform: none;
  margin: 0.2em;
}
.btn-next {
  background-color: rgb(252, 143, 1);
  text-transform: none;
  color: white;
  font-size: 15px;
}

.btnNormal {
  color: rgb(1, 83, 81);
  font-weight: bold;
}
.btnClicked {
  background-color: rgb(1, 83, 81);
  color: white;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 500px) {
  div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
    height: 35px;
  }
  .btn-next {
    font-size: 12px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.9em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.7em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.9em;
  }
  ::v-deep(.v-checkbox .v-label) {
    font-size: 0.8em;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 500px) {
  div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
    height: 35px;
  }
  .btn-next {
    font-size: 12px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.9em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.7em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.9em;
  }
  ::v-deep(.v-checkbox .v-label) {
    font-size: 0.9em;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
    height: 35px;
  }
  .btn-next {
    font-size: 14px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.9em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.7em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.9em;
  }
  ::v-deep(.v-checkbox .v-label) {
    font-size: 0.9em;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  div {
    font-size: 14px;
  }
  .btn {
    font-size: 14px;
    border-radius: 50px;
    border: 2.5px solid rgb(1, 83, 81);
  }
  .btn-next {
    font-size: 15px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 2.5px solid rgb(1, 83, 81);
  }

  ::v-deep(.v-textarea textarea) {
    font-size: 1em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.8em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 1em;
  }
  ::v-deep(.v-checkbox .v-label) {
    font-size: 1em;
  }
}
</style>
