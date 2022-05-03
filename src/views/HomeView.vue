<template>
  <SideFilterBar v-if="!smallScreen" class="compact-form" />
  <v-main>
    <v-btn v-if="smallScreen" @click="showFilterBar" class="filter-button" margin-top="50">Filter</v-btn>
    <v-container v-if="smallScreen && !showFilterMob" class="container-custom  sticky-after" fluid>
      <label class="bold pa-3"> {{ offersShown }} listings</label>
      <v-row v-for="(item, index) in offerCards" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :title="item.title"
            :type="item.type"
            :beds="item.beds"
            :baths="item.baths"
            :parkingLot="item.parkingLot"
            :price="item.price"
            :offerRequested="item.offerRequested"
            :offerSaved="item.offerSaved"
            :mainPicture="item.mainPicture"
          />
        </v-col>
      </v-row>
    </v-container>
    <BasicFilterBar v-if="smallScreen && showFilterMob" class="sticky-after"/>
    <v-container v-if="!smallScreen" class="container-custom" fluid>
      <label class="bold pa-3"> {{ offersShown }} listings</label>
      <v-row v-for="(item, index) in offerCards" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :title="item.title"
            :type="item.type"
            :beds="item.beds"
            :baths="item.baths"
            :parkingLot="item.parkingLot"
            :price="item.price"
            :offerRequested="item.offerRequested"
            :offerSaved="item.offerSaved"
            :mainPicture="item.mainPicture"
            showSaveBtn = "true"
          />
        </v-col> 
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import OfferCard from "@/components/OfferCard.vue";
import NavBar from "@/components/NavBar.vue";
import SideFilterBar from "@/components/SideFilterBar.vue";
import BasicFilterBar from "@/components/BasicFilterBar.vue";
import { computed } from "vue";
import offers from "../offers.json";
export default {
  name: "HomeView",
  components: {
    OfferCard,
    NavBar,
    SideFilterBar,
    BasicFilterBar
  },
  setup() {
    const offerCards = ref(offers);
    const offersShown = computed(() => {
      return offerCards.value.length;
    });
    const IsMobileWidth = () => {
      return window.innerWidth < 650;
    };
    const smallScreen = ref(IsMobileWidth());
    let showFilterMob = ref(false);
    let showFilterBar = () => {
      showFilterMob.value = !showFilterMob.value;

      //here we should apply the new filters 
    }
    onMounted(() => {
      window.addEventListener("resize", () => {
        smallScreen.value = IsMobileWidth();
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        smallScreen.value = IsMobileWidth();
      });
    });
    return {
      offerCards,
      offersShown,
      IsMobileWidth,
      smallScreen,
      showFilterMob,
      showFilterBar
    };
  },
};
</script>

<style scoped>
.container-custom {
  background-color: rgb(229, 229, 229);
}
.bold {
  font-size: 17px;
}
.filter-button {
  position: fixed;
  top: 50px; /* required */
  z-index: 1;
  width:100%;
  height:50px;
  border-radius: 0px;
  background-color:  rgb(255, 162, 0);
  color: white;
  font-weight:bold;
  text-transform: none;
}
.sticky-after {
  margin-top: 50px;
}
</style>
