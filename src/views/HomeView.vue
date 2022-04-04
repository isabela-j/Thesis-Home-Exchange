<script>
import { ref } from "vue";
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
    ]);
    const offersShown = computed(() => {
      return offerCards.value.length;
    });
    return {
      offerCards,
      offersShown,
    };
  },
};
</script>

<template>
  <FilterBar class="compact-form"/>
  <v-main>
    <v-container class="container-custom" fluid>
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

<style scoped>
.container-custom {
  background-color: rgb(229, 229, 229);
}
.bold {
  font-size: 17px;
}

</style>
