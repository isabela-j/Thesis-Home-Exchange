<template>
<v-main>
      <v-container class="container-custom" fluid>
      <label class="bold pa-3"> {{ savedOffersCount }} saved offers</label>
      <v-row v-for="(item, index) in savedOffersData" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :title="item.title"
            :type="item.type"
            :beds= "item.beds"
            :baths = "item.baths"
            :parkingLot = "item.parkingLot"
            :price="item.price"
            :offerRequested="item.offerRequested"
            :offerSaved="item.offerSaved"
            :mainPicture="item.mainPicture"
            showSaveBtn="true"
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
    name: "SavedOfferView",
    components: {
     OfferCard, 
  },
  setup() {
    const savedOffersData = ref([
      {
        title: "Marasti Street Nr 3",
        type: 1,
        beds: 4,
        baths: 2,
        parkingLot: 1,
        price: "230 000",
        offerRequested: true,
        offerSaved: true,
        mainPicture: "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706",
      },
      {
        title: "Iris Street Nr 1",
        type: 0,
        beds: 4,
        baths: 2,
        parkingLot: 1,
        price: "150 000",
        offerRequested: false,
        offerSaved: true,
        mainPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZoqOcp2UUh7Y2bXVpo46koYw29UamuHWiQ&usqp=CAU",
      },
       {
        title: "Manastur Street Nr 14",
        type: 0,
        beds: 4,
        baths: 2,
        parkingLot: 1,
        price: "180 000",
        offerRequested: false,
        offerSaved: true,
        mainPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4O9GCySQw_9C24XfInhq-lYgfnHlRSMB5g&usqp=CAU",
      },
       {
        title: "Venus Street Nr 20",
        type: 0,
        beds: 4,
        baths: 2,
        parkingLot: 1,
        price: "250 000",
        offerRequested: false,
        offerSaved: true,
        mainPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLSG2pHU9KTA7tHA62H0jXspw4tzlr1UYBg&usqp=CAU",
      },
    ]);
    const savedOffersCount = computed(() => {
      return savedOffersData.value.length;
    });
    return {
      savedOffersData,
      savedOffersCount,
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