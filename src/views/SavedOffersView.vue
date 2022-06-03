<template>
  <v-main>
    <v-container class="container-custom" fluid>
      <label class="bold pa-3"> {{ savedOffersCount }} saved offers</label>
      <v-row v-for="(item, index) in savedOffersData" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :idAnnounce="item.announceMainDetailsId"
            :title="item.title"
            :type="item.type"
            :beds="item.beds"
            :baths="item.baths"
            :parkingLot="item.parkingLot"
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
import { ref, computed, reactive } from "vue";
import OfferCard from "@/components/OfferCard.vue";
import AnnounceMainDetailsAPI from "@/api/resources/AnnounceMainDetails.js";
import LoginAPI from "@/api/resources/Login.js";
import SavedAPI from "@/api/resources/OfferSaved.js";
import { useStore } from "vuex";
export default {
  name: "SavedOfferView",
  components: {
    OfferCard,
  },
  created() {
    this.getSavedPosts();
  },
  setup() {
    let currentOwnerId = ref();
    const savedOffersData = reactive([]);
    let getSavedPosts = async () => {
      try {
        currentOwnerId.value = store.state.ownerId;
        let savedPosts = await SavedAPI.getAllOffersSavedByOwner(
          currentOwnerId.value
        );
        let sentDetails =
          await AnnounceMainDetailsAPI.getAllAnnounceMainDetailsFromOwner(
            currentOwnerId.value
          );
        savedPosts.forEach(async (post) => {
          let details = await AnnounceMainDetailsAPI.getAnnounceMainDetail(
            post.announceMainDetailId
          );
          parsePost(details, sentDetails);
        });
      } catch (error) {}
    };
    const store = useStore();
    let parsePost = async (post, sentDetails) => {
      let listing = {};
      listing.announceMainDetailsId = post.id_announceMainDetails;
      listing.title = post.title;
      listing.beds = post.bedroomsNo;
      listing.baths = post.bathroomsNo;
      listing.parkingLot = post.parkingLotsNo;
      listing.price = post.price;
      listing.offerRequested = false;
      post.offerReceived.forEach((received) => {
        if (received.id_received == post.id_announceMainDetails) {
          sentDetails.forEach((userOffers) => {
            if (received.id_sender == userOffers.id_announceMainDetails) {
              listing.offerRequested = true;
            }
          });
        }
      });
      post.announceCharacteristic.forEach((characteristic) => {
        if (
          characteristic.announceMainDetailId == post.id_announceMainDetails
        ) {
          listing.type = characteristic.realEstateTypeId;
        }
      });
      post.offerSaved.forEach((saved) => {
        if (saved.ownerId == currentOwnerId.value) {
          listing.offerSaved = true;
        }
      });
      listing.mainPicture =
        "https://static01.nyt.com/images/2019/06/25/realestate/25domestic-zeff/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg?quality=75&auto=webp"; //SCHIMBA
      savedOffersData.push(listing);
    };
    const savedOffersCount = computed(() => {
      return savedOffersData.length > 0 ? savedOffersData.length : 0;
    });
    return {
      savedOffersData,
      savedOffersCount,
      currentOwnerId,
      getSavedPosts,
      parsePost,
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
  width: 100%;
  height: 50px;
  border-radius: 0px;
  background-color: rgb(255, 162, 0);
  color: white;
  font-weight: bold;
  text-transform: none;
}
.sticky-after {
  margin-top: 50px;
}
</style>
