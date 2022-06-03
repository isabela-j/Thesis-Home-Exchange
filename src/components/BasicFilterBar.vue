<template>
  <v-container class="container-custom">
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
    <Filters @newFilters="startFilter" v-if="showPreferences" />
    <MiniCardsList v-else :cardsData="myOffers" />
  </v-container>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, reactive } from "vue";
import Filters from "@/components/Filters.vue";
import MiniCardsList from "@/components/MiniCardsList.vue";
import AnnounceMainDetailsAPI from "@/api/resources/AnnounceMainDetails.js";
import LoginAPI from "@/api/resources/Login.js";
import { useStore } from "vuex";
export default {
  name: "BasicFilterBar",
  components: {
    Filters,
    MiniCardsList,
  },
  emits: ["filterPosts"],
  setup(_, { emit }) {
    let currentOwnerId = ref(1);
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
    let setShowYourAnnounces = async () => {
      if (!showYourAnnounces.value) {
        showPreferences.value = !showPreferences.value;
        showYourAnnounces.value = !showPreferences.value;
        currentOwnerId.value = store.state.ownerId;
        let posts =
          await AnnounceMainDetailsAPI.getAllAnnounceMainDetailsFromOwner(
            currentOwnerId.value
          );
        parsePosts(posts);
      }
    };
    let startFilter = (filters) => {
      emit("filterPosts", filters);
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
    return {
      drawer,
      showPreferences,
      showYourAnnounces,
      setShowPreferences,
      setShowYourAnnounces,
      startFilter,
      parsePosts,
      myOffers,
      currentOwnerId,
    };
  },
};
</script>

<style scoped>
.container-custom {
  background-color: rgb(229, 229, 229);
}
.btnPressed {
  border-radius: 0px;
  border: 2.5px solid white;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.btnNotPressed {
  border-radius: 0px;
  border-color: rgb(1, 83, 81);
  background-color: rgb(1, 83, 81);
  color: white;
  border: 2.5px solid rgb(1, 83, 81);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
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
</style>
