<template>
  <v-main>
    <v-container class="container-custom" fluid>
      <label class="bold pa-3">
        {{ receivedOffersCount }} received offers</label
      >
      <v-row v-for="(item, index) in receivedOffersData" :key="index" dense>
        <v-col :key="index">
          <SentReceivedCard
            :announceId="item.id_sender"
            :title="item.title"
            :type="item.type"
            :beds="item.bedroomsNo"
            :baths="item.bathroomsNo"
            :parkingLot="item.parkingLotsNo"
            :price="item.price"
            :mainPicture="item.mainPicture"
            :message="item.senderMessage"
            :offerStatus="item.offerAccepted"
            :senderPhoneNo="item.senderPhoneNumber"
            :senderEmail="item.senderEmail"
            :titleY="item.titleY"
            :typeY="item.typeY"
            :bedsY="item.bedroomsNoY"
            :bathsY="item.bathroomsNoY"
            :parkingLotY="item.parkingLotsNoY"
            :priceY="item.priceY"
            :mainPictureY="item.mainPictureY"
            :descY="item.descY"
            :currentOwnerId="currentOwnerId"
            :idSentReceived="item.id_offerSendAndReceived"
            :announceStatus = "item.announceStatus"
             :announceStatusY="item.announceStatusY"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref, computed, reactive } from "vue";
import SentReceivedCard from "@/components/SentReceivedCard.vue";
import AnnounceMainDetailsAPI from "@/api/resources/AnnounceMainDetails.js";
import OfferSentAndReceivedAPI from "@/api/resources/OfferSentAndReceived.js";
import { useStore } from "vuex";
export default {
  name: "ReceivedOfferView",
  components: {
    SentReceivedCard,
  },
  created() {
    this.populateReceived();
  },
  setup() {
    let receivedOffersData = reactive([]);
    let yourOffersData = reactive([]);
    let currentOwnerId = ref();
    const receivedOffersCount = computed(() => {
      return receivedOffersData.length > 0 ? receivedOffersData.length : 0;
    });
    let parseData = (data) => {
      data.forEach((post) => {
        post.offerReceived.forEach(async (sent) => {
          let listing = sent;
          let announceData = await AnnounceMainDetailsAPI.getAnnounceMainDetail(
            sent.id_sender,
            store.state.accessToken
          );
          listing.announceStatus = announceData.announceStatus;
          listing.announceId = announceData.id_announceMainDetails;
          listing.title = announceData.title;
          listing.bedroomsNo = announceData.bedroomsNo;
          listing.bathroomsNo = announceData.bathroomsNo;
          listing.parkingLotsNo = announceData.parkingLotsNo;
          listing.price = announceData.price;
          listing.type =
            announceData.announceCharacteristic[0].realEstateTypeId;
          if (announceData.image.length > 0) {
            listing.mainPicture = announceData.image[0].imageData;
          }

          listing.announceStatusY= post.announceStatus;
          listing.titleY = post.title;
          listing.bedroomsNoY = post.bedroomsNo;
          listing.bathroomsNoY = post.bathroomsNo;
          listing.parkingLotsNoY = post.parkingLotsNo;
          listing.priceY = post.price;
          listing.typeY = post.announceCharacteristic[0].realEstateTypeId;
          if (post.image.length > 0) {
            listing.mainPictureY = post.image[0].imageData;
          }
          listing.descY = post.fullDescription;
          receivedOffersData.push(listing);
        });
      });
    };
    const store = useStore();
    let populateReceived = async () => {
      currentOwnerId.value = store.state.ownerId;
      let data =
        await AnnounceMainDetailsAPI.getAllAnnounceMainDetailsFromOwner(
          currentOwnerId.value,
          store.state.accessToken
        );
      parseData(data);
    };
    return {
      receivedOffersData,
      receivedOffersCount,
      populateReceived,
      currentOwnerId,
      yourOffersData,
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
