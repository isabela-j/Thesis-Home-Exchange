<template>
  <v-list-item dense class="example">
      <v-list-item-title class="example" dense>Filters</v-list-item-title>
    <v-spacer></v-spacer>
    <v-list-item-title class="alignEnd" dense>
      <v-btn class="btnReset" @click="ResetAllOptions">Reset all</v-btn>
    </v-list-item-title>
  </v-list-item>

  <v-divider></v-divider>
  <v-container class="pa-0" dense>
    <v-expansion-panels multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>Location</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-select
            :items="location"
            label="choose offer location"
            v-model="offerLocation"
            multiple
            persistent-hint
            return-object
            single-line
          ></v-select>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Type</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-btn
            v-if="btnHouse"
            class="btn btnClicked"
            @click="CheckBtn('house')"
            >House</v-btn
          >
          <v-btn v-else class="btn btnNormal" @click="CheckBtn('house')"
            >House</v-btn
          >
          <v-btn
            v-if="btnApartment"
            class="btn btnClicked"
            @click="CheckBtn('apartment')"
            >Apartment</v-btn
          >
          <v-btn v-else class="btn btnNormal" @click="CheckBtn('apartment')"
            >Apartment</v-btn
          >
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Bedrooms</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="justif">
            <v-select
              :items="bedrooms"
              label="choose number of rooms"
              v-model="roomsNo"
              multiple
              persistent-hint
              return-object
              single-line
            ></v-select>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Bathrooms</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="justif">
            <v-select
              :items="bathrooms"
              label="choose number of bathrooms"
              v-model="bathsNo"
              multiple
              persistent-hint
              return-object
              single-line
            ></v-select>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Partition</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="justif">
             <v-select
            :items="partitionModel"
            label="choose the partitioning"
            v-model="partition"
            multiple
            persistent-hint
            return-object
            single-line
          ></v-select>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Parking lots</v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="justif">
            <v-select
              :items="parkingLots"
              label="choose number of parking lots"
              v-model="parkingNo"
              multiple
              persistent-hint
              return-object
              single-line
            ></v-select>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>Price</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-container fluid>
            <v-row dense>
              <v-col :key="7">
                <v-text-field
                  label="min price"
                  hide-details="auto"
                  v-model="minPrice"
                >
                  <font-awesome-icon icon="euro-sign" color="rgb(252,158,1)" />
                </v-text-field>
              </v-col>
              <v-col :key="8">
                <v-text-field
                  label="max price"
                  hide-details="auto"
                  v-model="maxPrice"
                >
                  <font-awesome-icon icon="euro-sign" color="rgb(252,158,1)" />
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Sqft</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-container fluid>
            <v-row dense>
              <v-col :key="3">
                <v-text-field
                  label="min sqft"
                  hide-details="auto"
                  v-model="minSqft"
                />
              </v-col>
              <v-col :key="4">
                <v-text-field
                  label="max sqft"
                  hide-details="auto"
                  v-model="maxSqft"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Construction year</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-container fluid>
            <v-row dense>
              <v-col :key="5">
                <v-text-field
                  label="min year"
                  hide-details="auto"
                  v-model="minYear"
                />
              </v-col>
              <v-col :key="6">
                <v-text-field
                  label="max year"
                  hide-details="auto"
                  v-model="maxYear"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Floor</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-select
            :items="floors"
            label="floor number"
            multiple
            v-model="floorNo"
          ></v-select>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Utilities</v-expansion-panel-title>
        <v-expansion-panel-text>
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
          <v-checkbox v-model="newRadiators" label="new radiators" hide-details>
          </v-checkbox>
          <v-checkbox
            v-model="underfloorHeating"
            label="underfloor heating"
            hide-details
          >
          </v-checkbox>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Features</v-expansion-panel-title>
        <v-expansion-panel-text>
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
          <v-checkbox v-model="dishwasher" label="dishwasher" hide-details>
          </v-checkbox>
          <v-checkbox v-model="garage" label="garage" hide-details>
          </v-checkbox>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
   
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "Filters",
  setup() {
    let bedrooms = ref(["1", "2", "3", "4", "4+"]);
    let roomsNo = ref([]);
    let bathrooms = ref(["1", "2", "3", "3+"]);
    let bathsNo = ref([]);
    let parkingLots = ref(["1", "2", "3", "3+"]);
    let parkingNo = ref([]);
    let floors = ref([
      "semi-basement",
      "ground floor",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "6+",
      "mansard",
    ]);
    let partitionModel = ref([
      "detached",
      "semi-detached",
      "uncompartmented"
    ]);
    let partition = ref([]);
    let floorNo = ref([]);
    let features = ref([
      "modern furniture",
      "electric stove",
      "washing machine",
      "dishwasher",
      "garage",
    ]);
    let utilities = ref([
      "electrical curent",
      "water pipe",
      "sewerage",
      "gas pipe",
      "thermal power station",
      "new radiators",
    ]);
    let panel = ref([0, 1]);
    let btnHouse = ref(false);
    let btnApartment = ref(false);
    let minPrice = ref();
    let maxPrice = ref();
    let minSqft = ref();
    let maxSqft = ref();
    let minYear = ref();
    let maxYear = ref();
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
    let offerLocation = ref([]);
    let CheckBtn = (type) => {
      if (type == "house") btnHouse.value = !btnHouse.value;
      else if (type == "apartment") btnApartment.value = !btnApartment.value;
    };

    let ResetAllOptions = () => {
      offerLocation.value = [];
      btnHouse.value = false;
      btnApartment.value = false;
      minPrice.value = '';
      maxPrice.value = '';
      minSqft.value = '';
      maxSqft.value = '';
      minYear.value = '';
      maxYear.value = '';
      electricalCurent.value  = false;
      waterPipe.value  = false;
      sewerage.value  = false;
      gasPipe.value  = false;
      thermalStation.value  = false;
      newRadiators.value  = false;
      underfloorHeating.value  = false;
      modernFurniture.value  = false;
      electricStove.value  = false;
      washingMachine.value  = false;
      dishwasher.value  = false;
      garage.value  = false;
      roomsNo.value = [];
      bathsNo.value = [];
      parkingNo.value = [];
      floorNo.value = [];
      partition.value=[];
    };
    return {
      ResetAllOptions,
      features,
      utilities,
      panel,
      location,
      offerLocation,
      btnHouse,
      btnApartment,
      partition,
      partitionModel,
      minPrice,
      maxPrice,
      minSqft,
      maxSqft,
      minYear,
      maxYear,
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
      bedrooms,
      bathrooms,
      parkingLots,
      roomsNo,
      bathsNo,
      parkingNo,
      floors,
      floorNo,
    };
  },
};
</script>

<style scoped>
.example {
  background-color: white;
}
.btnReset {
  border-color: none;
  text-transform: none;
  color: rgb(1, 83, 81);
  border: 0 !important;
  box-shadow: none !important;
  outline: none !important;
}
.btnReset:hover {
  text-decoration: underline;
}
.alignEnd {
  display: inline-flex;
}
.btn {
  border-radius: 50px;
  border: 2.5px solid rgb(252, 158, 1);
  color: rgb(252, 158, 1);
  text-transform: none;
  margin: 3px;
  font-size: 12px;
}

.btnNormal {
  color: rgb(252, 158, 1);
  font-weight: bold;
}
.btnClicked {
  background-color: rgb(252, 158, 1);
  color: white;
}
.justif {
  justify-content: space-evenly;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 500px) {
  div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    height: 35px;
  }
  .btn-next {
    font-size: 12px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
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
@media only screen and (max-width:768px) {
  div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    height: 35px;
  }
  .btn-next {
    font-size: 12px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
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
    height: 35px;
  }
  .btn-next {
    font-size: 14px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
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
  }
  .btn-next {
    font-size: 15px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
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
