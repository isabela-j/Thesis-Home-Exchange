<template>
  <v-main>
    <v-container class="container-custom" fluid>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div>
              <v-label> Choose your preferences for your future house</v-label>
            </div>
            <div style="display: flex; flex-direction: column">
              <label class="warning-label"
                ><v-icon
                  icon="mdi-alert-box"
                  color="rgb(200, 30, 20)"
                  size="x-large"
                />
                Be careful, these options should match with your main
                preferences. Once you have chosen your options, the other users
                cannot send you offer requests unless their announcements does
                match with those options. This way we assure that you will not
                receive unwanted offers from our users. If a certain section
                does not seem that important, you can leave it blank.
              </label>
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
                <v-btn v-else class="btn btnClicked" @click="CheckBtn('house')"
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
                  label="choose wanted locations"
                  multiple
                  v-model="wantedLocations"
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
              <label>Bedrooms</label>
              <div style="margin: 0.4em">
                <v-row>
                  <v-col key="11">
                    <v-text-field
                      label="min"
                      v-model="minBeds"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col key="12">
                    <v-text-field
                      label="max"
                      v-model="maxBeds"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                </v-row>
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
                <v-row>
                  <v-col key="11">
                    <v-text-field
                      label="min"
                      v-model="minBaths"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col key="12">
                    <v-text-field
                      label="max"
                      v-model="maxBaths"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                </v-row>
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
                <v-btn v-else class="btn btnClicked" @click="CheckBtn('semi')">
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
                <v-row>
                  <v-col key="11">
                    <v-text-field
                      label="min"
                      v-model="minFloor"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col key="12">
                    <v-text-field
                      label="max"
                      v-model="maxFloor"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                </v-row>
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
                <v-row>
                  <v-col key="11">
                    <v-text-field
                      label="min"
                      v-model="minParking"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col key="12">
                    <v-text-field
                      label="max"
                      v-model="maxParking"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                </v-row>
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
                <v-row>
                  <v-col key="11">
                    <v-text-field
                      label="min"
                      v-model="minSqft"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                  <v-col key="12">
                    <v-text-field
                      label="max"
                      v-model="maxSqft"
                      hide-details="auto"
                      variant="underlined"
                    />
                  </v-col>
                </v-row>
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
                  v-model="electricalCurent"
                  label="electrical curent"
                  hide-details
                >
                </v-checkbox>
                <v-checkbox v-model="waterPipe" label="water pipe" hide-details>
                </v-checkbox>
                <v-checkbox v-model="sewerage" label="sewerage" hide-details>
                </v-checkbox>
                <v-checkbox v-model="gasPipe" label="gas pipe" hide-details>
                </v-checkbox>
                <v-checkbox
                  v-model="thermalStation"
                  label="thermal power station"
                  hide-details
                >
                </v-checkbox>
                <v-checkbox
                  v-model="newRadiators"
                  label="new radiators"
                  hide-details
                >
                </v-checkbox>
                <v-checkbox
                  v-model="underfloorHeating"
                  label="underfloor heating"
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
                  v-model="modernFurniture"
                  label="modern furniture"
                  hide-details
                >
                </v-checkbox>
                <v-checkbox
                  v-model="electricStove"
                  label="electric stove"
                  hide-details
                >
                </v-checkbox>
                <v-checkbox
                  v-model="washingMachine"
                  label="washing machine"
                  hide-details
                >
                </v-checkbox>
                <v-checkbox
                  v-model="dishwasher"
                  label="dishwasher"
                  hide-details
                >
                </v-checkbox>
                <v-checkbox v-model="garage" label="garage" hide-details>
                </v-checkbox>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <div class="right">
            <v-btn class="btn-next" @click="GoToLocation('/')"
              >Post offer</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ChoosePreferencesView",
  setup() {
    let btnHouse = ref(false);
    let btnApartment = ref(false);
    let minBeds = ref(0);
    let maxBeds = ref();
    let minBaths = ref(0);
    let maxBaths = ref();
    let btnDetached = ref(false);
    let btnSemi = ref(false);
    let btnUncompartmented = ref(false);
    let minFloor = ref(0);
    let maxFloor = ref();
    let minParking = ref(0);
    let maxParking = ref();
    let minSqft = ref(0);
    let maxSqft = ref();
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
    let wantedLocations = ref("Centru");
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
    let defaultText = ref(
      "Please write here a short description about the house/apartment you want to exchange. In this way we will cover some features we may didn't included and will help the potential buyer to make a better idea about your announce :)"
    );
    let GoToLocation = (location) => {
      window.location = location;
    };
    let CheckBtn = (type) => {
      if (type == "house") btnHouse.value = !btnHouse.value;
      else if (type == "apartment") btnApartment.value = !btnApartment.value;
      else if (type == "detached") btnDetached.value = !btnDetached.value;
      else if (type == "semi") btnSemi.value = !btnSemi.value;
      else if (type == "uncompartmented")
        btnUncompartmented.value = !btnUncompartmented.value;
    };
    return {
      defaultText,
      GoToLocation,
      btnHouse,
      btnApartment,
      minBeds,
      maxBeds,
      minBaths,
      maxBaths,
      btnDetached,
      btnSemi,
      btnUncompartmented,
      minFloor,
      maxFloor,
      minParking,
      maxParking,
      minSqft,
      maxSqft,
      CheckBtn,
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
      location,
      wantedLocations
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

.warning-label {
  color: rgb(209, 23, 23);
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

::v-deep(.v-checkbox .v-label) {
  font-size: 1em;
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
