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
            v-model="filters.offerLocation"
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
            v-if="filters.house"
            class="btn btnClicked"
            @click="CheckBtn('house')"
            >House</v-btn
          >
          <v-btn v-else class="btn btnNormal" @click="CheckBtn('house')"
            >House</v-btn
          >
          <v-btn
            v-if="filters.apartment"
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
              v-model="filters.roomsNo"
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
              v-model="filters.bathsNo"
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
            v-model="filters.partition"
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
              v-model="filters.parkingNo"
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
                  v-model="filters.minPrice"
                >
                  <font-awesome-icon icon="euro-sign" color="rgb(252,158,1)" />
                </v-text-field>
              </v-col>
              <v-col :key="8">
                <v-text-field
                  label="max price"
                  hide-details="auto"
                  v-model="filters.maxPrice"
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
                  v-model="filters.minSqft"
                />
              </v-col>
              <v-col :key="4">
                <v-text-field
                  label="max sqft"
                  hide-details="auto"
                  v-model="filters.maxSqft"
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
                  v-model="filters.minYear"
                />
              </v-col>
              <v-col :key="6">
                <v-text-field
                  label="max year"
                  hide-details="auto"
                  v-model="filters.maxYear"
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
            v-model="filters.floorNo"
          ></v-select>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-title>Utilities</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-checkbox
            v-model="filters.electricalCurent"
            label="electrical curent"
            hide-details
          >
          </v-checkbox>
          <v-checkbox v-model="filters.waterPipe" label="water pipe" hide-details>
          </v-checkbox>
          <v-checkbox v-model="filters.sewerage" label="sewerage" hide-details>
          </v-checkbox>
          <v-checkbox v-model="filters.gasPipe" label="gas pipe" hide-details>
          </v-checkbox>
          <v-checkbox
            v-model="filters.thermalStation"
            label="thermal power station"
            hide-details
          >
          </v-checkbox>
          <v-checkbox v-model="filters.newRadiators" label="new radiators" hide-details>
          </v-checkbox>
          <v-checkbox
            v-model="filters.underfloorHeating"
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
            v-model="filters.modernFurniture"
            label="modern furniture"
            hide-details
          >
          </v-checkbox>
          <v-checkbox
            v-model="filters.electricStove"
            label="electric stove"
            hide-details
          >
          </v-checkbox>
          <v-checkbox
            v-model="filters.washingMachine"
            label="washing machine"
            hide-details
          >
          </v-checkbox>
          <v-checkbox v-model="filters.dishwasher" label="dishwasher" hide-details>
          </v-checkbox>
          <v-checkbox v-model="filters.garage" label="garage" hide-details>
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
  emits: ["newFilters"],
  setup(_, { emit }) {
    let bedrooms = ref(["1", "2", "3", "4", "4+"]);
    let bathrooms = ref(["1", "2", "3", "3+"]);
    let parkingLots = ref(["1", "2", "3", "3+"]);
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
  
    let CheckBtn = (type) => {
      if (type == "house") filters.house = !filters.house;
      else if (type == "apartment") filters.apartment = !filters.apartment;
    };

     let filters = reactive( {
      roomsNo: [],
      offerLocation: [],
      bathsNo: [],
      parkingNo: [],
      partition: [],
      floorNo: [],
      house: false,
      apartment: false,
      minPrice: 0,
      maxPrice: 0,
      minSqft: 0,
      maxSqft: 0,
      minYear: 0,
      maxYear: 0,
      electricalCurent: false,
      waterPipe: false,
      sewerage: false,
      gasPipe: false,
      thermalStation: false,
      newRadiators: false,
      underfloorHeating: false,
      modernFurniture: false,
      electricStove: false,
      washingMachine: false,
      dishwasher: false,
      garage: false,
    })
    let ResetAllOptions = () => {
      filters.offerLocation = [];
      filters.house = false;
      filters.apartment = false;
      filters.minPrice = "";
      filters.maxPrice = "";
      filters.minSqft = "";
      filters.maxSqft = "";
      filters.minYear = "";
      filters.maxYear = "";
      filters.electricalCurent = false;
      filters.waterPipe = false;
      filters.sewerage = false;
      filters.gasPipe = false;
      filters.thermalStation = false;
      filters.newRadiators = false;
      filters.modernFurniture = false;
      filters.electricStove = false;
      filters.washingMachine = false;
      filters.dishwasher = false;
      filters.garage = false;
      filters.roomsNo = [];
      filters.bathsNo = [];
      filters.parkingNo = [];
      filters.floorNo = [];
      filters.partition = [];
    };
     let filtersChanged = () => {
      let announceMainDetails = {
        fullAddress: [],
        bedroomsNo: [],
        bathroomsNo: [],
        price: {
          min: parseInt(filters.minPrice),
          max: parseInt(filters.maxPrice),
        },
        squareMeters: {
          min: parseInt(filters.minSqft),
          max: parseInt(filters.maxSqft),
        },
        parkingLotsNo: [],
      };
      filters.offerLocation.forEach((loc) => announceMainDetails.fullAddress.push(loc));
      filters.roomsNo.forEach((nr) => announceMainDetails.bedroomsNo.push(nr));
      filters.bathsNo.forEach((nr) => announceMainDetails.bathroomsNo.push(nr));
      filters.parkingNo.forEach((nr) =>
        announceMainDetails.parkingLotsNo.push(nr)
      );

      let type = [];
      if (filters.house) type.push(1);
      if (filters.apartment) type.push(2);

      let distrib = [];
      filters.partition.forEach((partition) => {
        if (partition === "detached") {
          distrib.push(1);
        } else if (partition === "semi-detached") {
          distrib.push(2);
        } else if (partition === "uncompartmented") {
          distrib.push(3);
        }
      });

      let announceCharacteristics = {
        floorNo: [],
        constructiionYear: {
          min: parseInt(filters.minYear),
          max: parseInt(filters.maxYear),
        },
        realEstateTypeId: type,
        realEstateDistributionId: distrib,
      };
      filters.floorNo.forEach((nr) => announceCharacteristics.floorNo.push(nr));

      let announceUtilities = {
        electricalCurrent: filters.electricalCurent,
        waterPipe: filters.waterPipe,
        sewerage: filters.sewerage,
        gasPipe: filters.gasPipe,
        thermalPowerStationOwn: filters.thermalStation,
        newRadiators: filters.newRadiators
      }

      let announceFeatures = {
        modernFurniture: filters.modernFurniture,
        electricStove: filters.electricStove,
        washingMachine: filters.washingMachine,
        dishWasher: filters.dishwasher,
        garage: filters.garage
      }

      let finalFilters = {
        announceMainDetails: announceMainDetails,
        announceCharacteristics: announceCharacteristics,
        announceUtilities: announceUtilities,
        announceFeatures: announceFeatures
      }
    
      var el = JSON.parse(JSON.stringify(finalFilters));
      emit("newFilters", el);
    }
    return {
      ResetAllOptions,
      features,
      utilities,
      location,
      partitionModel,
      CheckBtn,
      bedrooms,
      bathrooms,
      parkingLots,
      floors,
      filters,
      filtersChanged
    };
  },
   watch: {
     'filters.offerLocation' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.house' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.apartment' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.minPrice' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.maxPrice' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.minSqft' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.maxSqft' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.minYear' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.maxYear' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.electricalCurent' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.waterPipe' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.gasPipe' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.sewerage' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.thermalStation' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.newRadiators' : function(val, oldval) {
       this.filtersChanged();
      },
       'filters.underfloorHeating' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.modernFurniture' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.electricStove' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.washingMachine' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.dishwasher' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.garage' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.roomsNo' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.bathsNo' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.parkingNo' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.floorNo' : function(val, oldval) {
       this.filtersChanged();
      },
      'filters.partition' : function(val, oldval) {
       this.filtersChanged();
      },

   
   
   
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
