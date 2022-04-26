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
            :details="item.details"
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
            :details="item.details"
            :price="item.price"
            :offerRequested="item.offerRequested"
            :offerSaved="item.offerSaved"
            :mainPicture="item.mainPicture"
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

export default {
  name: "HomeView",
  components: {
    OfferCard,
    NavBar,
    SideFilterBar,
    BasicFilterBar
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
        mainPicture: "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706",
      },
      {
        title: "Iris Street Nr 1",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "150 000",
        offerRequested: false,
        offerSaved: true,
        mainPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZoqOcp2UUh7Y2bXVpo46koYw29UamuHWiQ&usqp=CAU",
      },
       {
        title: "Manastur Street Nr 14",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "180 000",
        offerRequested: false,
        offerSaved: true,
        mainPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4O9GCySQw_9C24XfInhq-lYgfnHlRSMB5g&usqp=CAU",
      },
       {
        title: "Venus Street Nr 20",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "250 000",
        offerRequested: false,
        offerSaved: true,
        mainPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLSG2pHU9KTA7tHA62H0jXspw4tzlr1UYBg&usqp=CAU",
      },
    ]);
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
