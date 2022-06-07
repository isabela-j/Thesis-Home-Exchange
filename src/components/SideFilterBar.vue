<template>
  <v-navigation-drawer
    v-model="drawer"
    :width="windowSize"
    permanent
    clipped
    flat
    app
    bottom
    class="compact-form filter-resize"
  >
    <div v-if="windowSize / 0.2 < 800">
      <v-btn
        v-if="showPreferences"
        class="btnPressed w-100"
        @click="setShowPreferences"
        >What you want</v-btn
      >
      <v-btn v-else class="btnNotPressed w-100" @click="setShowPreferences"
        >What you want</v-btn
      >
      <div />
      <v-btn
        v-if="showYourAnnounces"
        class="btnPressed w-100"
        @click="setShowYourAnnounces"
        >What you have</v-btn
      >
      <v-btn v-else class="btnNotPressed w-100" @click="setShowYourAnnounces"
        >What you have</v-btn
      >
    </div>
    <div v-else>
      <v-btn
        v-if="showPreferences"
        class="btnPressed w-50"
        @click="setShowPreferences"
        >What you want</v-btn
      >
      <v-btn v-else class="btnNotPressed w-50" @click="setShowPreferences"
        >What you want</v-btn
      >
      <v-btn
        v-if="showYourAnnounces"
        class="btnPressed w-50"
        @click="setShowYourAnnounces"
        >What you have</v-btn
      >
      <v-btn v-else class="btnNotPressed w-50" @click="setShowYourAnnounces"
        >What you have</v-btn
      >
    </div>
    <!--Filters v-if="showPreferences" /-->
    <div v-if="showPreferences">
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
                      <font-awesome-icon
                        icon="euro-sign"
                        color="rgb(252,158,1)"
                      />
                    </v-text-field>
                  </v-col>
                  <v-col :key="8">
                    <v-text-field
                      label="max price"
                      hide-details="auto"
                      v-model="filters.maxPrice"
                    >
                      <font-awesome-icon
                        icon="euro-sign"
                        color="rgb(252,158,1)"
                      />
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
              <v-checkbox
                v-model="filters.waterPipe"
                label="water pipe"
                hide-details
              >
              </v-checkbox>
              <v-checkbox
                v-model="filters.sewerage"
                label="sewerage"
                hide-details
              >
              </v-checkbox>
              <v-checkbox
                v-model="filters.gasPipe"
                label="gas pipe"
                hide-details
              >
              </v-checkbox>
              <v-checkbox
                v-model="filters.thermalStation"
                label="thermal power station"
                hide-details
              >
              </v-checkbox>
              <v-checkbox
                v-model="filters.newRadiators"
                label="new radiators"
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
              <v-checkbox
                v-model="filters.dishwasher"
                label="dishwasher"
                hide-details
              >
              </v-checkbox>
              <v-checkbox v-model="filters.garage" label="garage" hide-details>
              </v-checkbox>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </div>
    <MiniCardsList v-else :cardsData="myOffers" />
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block class="search-btn" @click="startFilter"> Search </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, reactive } from "vue";
import Filters from "@/components/Filters.vue";
import MiniCardsList from "@/components/MiniCardsList.vue";
import AnnounceMainDetailsAPI from "@/api/resources/AnnounceMainDetails.js";
import LoginAPI from "@/api/resources/Login.js";
import { useStore } from "vuex";
export default {
  name: "SideFilterBar",
  components: {
    Filters,
    MiniCardsList,
  },

  emits: ["resetFilters","filterPosts"],
  setup(props, { emit }) {
    let currentOwnerId = ref();

    let showPreferences = ref(true);
    let showYourAnnounces = ref(false);
    let drawer = ref(true);
    const store = useStore();
    let setShowPreferences = () => {
      if (!showPreferences.value) {
        showPreferences.value = !showPreferences.value;
        showYourAnnounces.value = !showPreferences.value;
      }
    };
    let parsePosts = async (posts) => {
      posts.forEach((post) => {
        let listing = {};
        listing.announceMainDetailsId = post.id_announceMainDetails;
        listing.title = post.title;
        listing.beds = post.bedroomsNo;
        listing.baths = post.bathroomsNo;
        listing.parkingLot = post.parkingLotsNo;
        listing.price = post.price;
        listing.offerRequested = false;
        post.announceCharacteristic.forEach((characteristic) => {
          if (
            characteristic.announceMainDetailId == post.id_announceMainDetails
          ) {
            listing.type = characteristic.realEstateTypeId;
          }
        });
        listing.mainPicture =
          "https://static01.nyt.com/images/2019/06/25/realestate/25domestic-zeff/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg?quality=75&auto=webp"; //SCHIMBA
        myOffers.push(listing);
      });
    };
    let myOffers = reactive([]);
    let setShowYourAnnounces = async () => {
      if (!showYourAnnounces.value) {
        showPreferences.value = !showPreferences.value;
        showYourAnnounces.value = !showPreferences.value;
       currentOwnerId.value = store.state.ownerId;
        let posts =
          await AnnounceMainDetailsAPI.getAllAnnounceMainDetailsFromOwner(
            currentOwnerId.value, 
            store.state.accessToken
          );
        parsePosts(posts);
      }
    };

    const windowSize = ref(window.innerWidth * 0.25);
    onMounted(() => {
      window.addEventListener("resize", () => {
        windowSize.value = window.innerWidth * 0.25;
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        windowSize.value = window.innerWidth * 0.25;
      });
    });
    let bedrooms = ref([1, 2, 3, 4, 5, 6, 7]);
    let bathrooms = ref([1, 2, 3, 4, 5]);
    let parkingLots = ref([1, 2, 3, 4, 5]);
    let floors = ref([0,1,2,3,4,5,6,7,8]);
    let partitionModel = ref(["detached", "semi-detached", "uncompartmented"]);
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
    let filters = reactive({
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
      modernFurniture: false,
      electricStove: false,
      washingMachine: false,
      dishwasher: false,
      garage: false,
    });

    let emitFilters= reactive({});

    let CheckBtn = (type) => {
      if (type == "house") filters.house = !filters.house;
      else if (type == "apartment") filters.apartment = !filters.apartment;
    };

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
      emit("resetFilters");
    };
    let startFilter = () => {
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
      emit("filterPosts", el);
    };

    return {
      drawer,
      showPreferences,
      showYourAnnounces,
      setShowPreferences,
      setShowYourAnnounces,
      windowSize,
      startFilter,
      ResetAllOptions,
      filters,
      features,
      utilities,
      location,
      partitionModel,
      CheckBtn,
      bedrooms,
      bathrooms,
      parkingLots,
      floors,
      myOffers,
      parsePosts,
      currentOwnerId,
    };
  },
};
</script>

<style scoped>
.btnPressed {
  border-radius: 0px;
  border: 2.5px solid white;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.btnNotPressed {
  border-radius: 0px;
  border-color: rgb(252, 158, 1);
  background-color: rgb(252, 158, 1);
  color: white;
  border: 2.5px solid rgb(252, 158, 1);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.search-btn {
  background-color: rgb(1, 83, 81);
  color: white;
}

.w-50 {
  width: 50%;
}

.w-100 {
  width: 100%;
}
.compact-form {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transform-origin-x: left;
  -webkit-transform-origin-y: top;
}

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
@media only screen and (min-width: 200px) {
  .btnPressed,
  .btnNotPressed {
    font-size: 0.5em;
  }
  .search-btn {
    font-size: 10px;
  }
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
@media only screen and (min-width: 600px) {
  .btnPressed,
  .btnNotPressed {
    font-size: 0.5em;
  }
  .search-btn {
    font-size: 11px;
  }
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
@media only screen and (min-width: 700px) {
  .btnPressed,
  .btnNotPressed {
    font-size: 0.6em;
  }
  .search-btn {
    font-size: 12px;
  }
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
  .btnPressed,
  .btnNotPressed {
    font-size: 0.9em;
  }
  .search-btn {
    font-size: 14px;
  }
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
