<template>
<v-main>
      <v-container class="container-custom" fluid>
      <label class="bold pa-3">You have  {{ postedOffers }} offers</label>
      <v-row v-for="(item, index) in postedOffersData" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :title="item.title"
            :type="item.type"
            :details="item.details"
            :price="item.price"
            :offerRequested="item.offerRequested"
            :offerSaved="item.offerSaved"
            :mainPicture="item.mainPicture"
            showSaveBtn="false"
          />
        </v-col>
      </v-row>
    </v-container>
</v-main>
</template>

<script>
import { ref, computed } from "vue";
import OfferCard from "@/components/OfferCard.vue";
export default {       
    name: "MyOffersView",
    components: {
     OfferCard, 
  },
  setup() {
    const postedOffersData = ref([
      {
        title: "My",
        type: 1,
        details: "5 bed- 2 baths- 2 parking lot",
        price: "230 000",
        offerRequested: true,
        offerSaved: true,
        mainPicture: "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706",
      },
      {
        title: "My 2",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "150 000",
        offerRequested: false,
        offerSaved: true,
        mainPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZoqOcp2UUh7Y2bXVpo46koYw29UamuHWiQ&usqp=CAU",
      },
       {
        title: "My 3",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "180 000",
        offerRequested: false,
        offerSaved: true,
        mainPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4O9GCySQw_9C24XfInhq-lYgfnHlRSMB5g&usqp=CAU",
      }
    ]);
    const postedOffers = computed(() => {
      return postedOffersData.value.length;
    });
    return {
      postedOffersData,
      postedOffers,
    };
  },
}
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