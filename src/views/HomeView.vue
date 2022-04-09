<template>
  <FilterBar v-if="largeScreen" class="compact-form" />
  <v-main>
    <v-btn v-if="!largeScreen" class="filter-button" margin-top="50">Filter</v-btn>
    <v-container v-if="largeScreen" class="container-custom" fluid>
      <label class="bold pa-3"> {{ offersShown }} listings</label>
      <v-row v-for="(item, index) in offerCards" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :title="item.title"
            :type="item.type"
            :details="item.details"
            :price="item.price"
            :offerRequested="item.offerRequested"
            :offerSaved="item.offerSaved"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else class="container-custom sticky-after" fluid>
      <label class="bold pa-3"> {{ offersShown }} listings</label>
      <v-row v-for="(item, index) in offerCards" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :title="item.title"
            :type="item.type"
            :details="item.details"
            :price="item.price"
            :offerRequested="item.offerRequested"
            :offerSaved="item.offerSaved"
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
import FilterBar from "@/components/FilterBar.vue";
import { computed } from "vue";

export default {
  name: "HomeView",
  components: {
    OfferCard,
    NavBar,
    FilterBar,
  },
  setup() {
    const offerCards = ref([
      {
        title: "Marasti Street Nr 3",
        type: 1,
        details: "5 bed- 2 baths- 2 parking lot",
        price: "230 000",
        offerRequested: true,
        offerSaved: false,
      },
      {
        title: "Manastur Street Nr 14",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "150 000",
        offerRequested: false,
        offerSaved: true,
      },
       {
        title: "Manastur Street Nr 14",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "150 000",
        offerRequested: false,
        offerSaved: true,
      },
       {
        title: "Manastur Street Nr 14",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "150 000",
        offerRequested: false,
        offerSaved: true,
      },
    ]);
    const offersShown = computed(() => {
      return offerCards.value.length;
    });
    const IsNOTMobileWidth = () => {
      return window.innerWidth > 650;
    };
    const largeScreen = ref(IsNOTMobileWidth());

    onMounted(() => {
      window.addEventListener("resize", () => {
        largeScreen.value = IsNOTMobileWidth();
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        largeScreen.value = IsNOTMobileWidth();
      });
    });
    return {
      offerCards,
      offersShown,
      IsNOTMobileWidth,
      largeScreen,
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
