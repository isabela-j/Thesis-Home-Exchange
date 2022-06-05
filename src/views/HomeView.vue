<template>
  <SideFilterBar
    v-if="!smallScreen"
    class="compact-form"
    @filterPosts="getFilteredPosts"
  />
  <v-main>
    <v-btn
      v-if="smallScreen"
      @click="showFilterBar"
      class="filter-button"
      margin-top="50"
      >Filter</v-btn
    >
    <v-container
      v-if="smallScreen && !showFilterMob"
      class="container-custom sticky-after"
      fluid
    >
      <label class="bold pa-3"> {{ offersShown }} listings</label>
      <v-row v-for="(item, index) in offerCards" :key="index" dense>
        <v-col :key="index">
          <OfferCard
           :idAnnounce = "item.announceMainDetailsId"
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
    <BasicFilterBar
      v-if="smallScreen && showFilterMob"
      @filterPosts="getFilteredPosts"
      class="sticky-after"
    />
    <v-container v-if="!smallScreen" class="container-custom" fluid>
      <label class="bold pa-3"> {{ offersShown }} listings</label>
      <v-row v-for="(item, index) in offerCards" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :idAnnounce = "item.announceMainDetailsId"
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
            :announceStatus = "item.announceStatus"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref, onMounted, onUnmounted, reactive, toRef } from "vue";
import OfferCard from "@/components/OfferCard.vue";
import NavBar from "@/components/NavBar.vue";
import SideFilterBar from "@/components/SideFilterBar.vue";
import BasicFilterBar from "@/components/BasicFilterBar.vue";
import AnnounceMainDetailsAPI from "@/api/resources/AnnounceMainDetails.js";
import LoginAPI from "@/api/resources/Login.js";
import { computed } from "vue";
import offers from "../offers.json";
import { useStore } from 'vuex'
export default {
  name: "HomeView",
  components: {
    OfferCard,
    NavBar,
    SideFilterBar,
    BasicFilterBar,
  },
  created() {
    this.getAllPosts();
  },
  setup() {
    let currentOwnerId = ref();
    let offerCards = reactive([]);
    let offersShown = computed(() => {
      return offerCards.length;
    });
    const IsMobileWidth = () => {
      return window.innerWidth < 650;
    };
    const smallScreen = ref(IsMobileWidth());
    let showFilterMob = ref(false);
    let showFilterBar = () => {
      showFilterMob.value = !showFilterMob.value;
    };
    let posts = reactive([]);
    let sentDetails = reactive([]);
    let parsePosts = async (posts, sentDetails) => {
      posts.forEach((post) => {
        let isOwnerOffer = false;
        sentDetails.forEach((ownerPost) => {
          if (ownerPost.id_announceMainDetails == post.id_announceMainDetails) { //do not show the Owner's posts in home view feed
            isOwnerOffer = true;
          }
        });
        if (!isOwnerOffer) {
          let listing = {};
          listing.announceMainDetailsId = post.id_announceMainDetails;
          listing.announceStatus = 0;
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
          if(post.image.length > 0)
          {
            listing.mainPicture = post.image[0].imageData;
          }
          offerCards.push(listing);
        }
      });
    };
    let getAllPosts = async () => {
      try {
        currentOwnerId.value = store.state.ownerId;
        posts = await AnnounceMainDetailsAPI.getAllAnnounceAvailable(store.state.accessToken);
        sentDetails =
          await AnnounceMainDetailsAPI.getAllAnnounceMainDetailsFromOwner(
            currentOwnerId.value,
            store.state.accessToken
          );
        parsePosts(posts, sentDetails);
      } catch (error) {}
    };
    const getFilteredPosts = (filters) => {
      offerCards.splice(0);
      console.log(filters);
    };
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
    const store = useStore();
    return {
      ownerId: computed(() => store.state.ownerId),
      offerCards,
      offersShown,
      IsMobileWidth,
      smallScreen,
      showFilterMob,
      showFilterBar,
      posts,
      getAllPosts,
      getFilteredPosts,
      sentDetails,
      currentOwnerId,
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
