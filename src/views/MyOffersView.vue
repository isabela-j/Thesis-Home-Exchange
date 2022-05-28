<template>
<v-main>
      <v-container class="container-custom" fluid>
      <label class="bold pa-3">You have  {{ postedOffers }} offers</label>
      <v-row v-for="(item, index) in offerCards" :key="index" dense>
        <v-col :key="index">
          <OfferCard
            :title="item.title"
            :type="item.type"
            :beds="item.beds"
            :baths="item.baths"
            :parkingLot="item.parkingLot"
            :price="item.price"
            offerRequested= false
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
import { ref, computed, reactive } from "vue";
import OfferCard from "@/components/OfferCard.vue";
import AnnounceMainDetailsAPI from "@/api/resources/AnnounceMainDetails.js";
import LoginAPI from "@/api/resources/Login.js";
export default {       
    name: "MyOffersView",
    components: {
     OfferCard, 
  },
  created() {
    this.getMyPosts();
  },
  setup() {
    let currentOwnerId = ref();
    let posts = reactive([]);
    let offerCards = reactive([]);
     let parsePosts = async (posts) => {
      posts.forEach((post) => {
        let listing = {};
        listing.announceMainDetailsId = post.id_announceMainDetails;
        listing.title = post.title;
        listing.beds = post.bedroomsNo;
        listing.baths = post.bathroomsNo;
        listing.parkingLot = post.parkingLotsNo;
        listing.price = post.price;
        post.announceCharacteristic.forEach((characteristic) => {
          if (
            characteristic.announceMainDetailId == post.id_announceMainDetails
          ) {
            listing.type = characteristic.realEstateTypeId;
          }
        });
        listing.mainPicture =
          "https://static01.nyt.com/images/2019/06/25/realestate/25domestic-zeff/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg?quality=75&auto=webp"; //SCHIMBA
        offerCards.push(listing);
      });
    };
     let getMyPosts = async () => {
      try {
        currentOwnerId.value = 1; //SCHIMBA cu ce ownerID ai tu
        let posts  =
          await AnnounceMainDetailsAPI.getAllAnnounceMainDetailsFromOwner(
            currentOwnerId.value
          );
        parsePosts(posts);
        console.log(offerCards);
      } catch (error) {}
    };
    const postedOffers = computed(() => {
      return offerCards.length;
    });
    return {
      postedOffers,
      currentOwnerId,
      offerCards,
      posts,
      getMyPosts,
      parsePosts
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