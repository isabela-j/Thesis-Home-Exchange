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
            :beds= "item.bedroomsNo"
            :baths = "item.bathroomsNo"
            :parkingLot = "item.parkingLotsNo"
            :price="item.price"
            :mainPicture="item.mainPicture"
            :message="item.senderMessage"
            :offerStatus="item.offerAccepted"
            :senderPhoneNo = "item.senderPhoneNumber"
            :senderEmail = "item.senderEmail"
            :titleY="item.titleY"
            :typeY="item.typeY"
            :bedsY= "item.bedroomsNoY"
            :bathsY = "item.bathroomsNoY"
            :parkingLotY = "item.parkingLotsNoY"
            :priceY="item.priceY"
            :mainPictureY="item.mainPictureY"
            :descY="item.descY"
            :currentOwnerId="currentOwnerId"
            :idSentReceived="item.id_offerSendAndReceived"
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
import { useStore } from 'vuex';
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
    //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLSG2pHU9KTA7tHA62H0jXspw4tzlr1UYBg&usqp=CAU"
    const receivedOffersCount = computed(() => {
      return receivedOffersData.length > 0 ? receivedOffersData.length : 0;
    });
    let parseData = (data) => {
      data.forEach((post) => {
        post.offerReceived.forEach(async (sent) => {
          let listing = sent;
          let announceData = await AnnounceMainDetailsAPI.getAnnounceMainDetail(
            sent.id_sender
          );
          listing.announceId= announceData.id_announceMainDetails;
          listing.title = announceData.title;
          listing.bedroomsNo = announceData.bedroomsNo;
          listing.bathroomsNo = announceData.bathroomsNo;
          listing.parkingLotsNo = announceData.parkingLotsNo;
          listing.price = announceData.price;
          listing.type = announceData.announceCharacteristic[0].realEstateTypeId;
          listing.mainPicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLSG2pHU9KTA7tHA62H0jXspw4tzlr1UYBg&usqp=CAU";
          
          
          listing.titleY = post.title;
          listing.bedroomsNoY = post.bedroomsNo;
          listing.bathroomsNoY = post.bathroomsNo;
          listing.parkingLotsNoY = post.parkingLotsNo;
          listing.priceY = post.price;
          listing.typeY = post.announceCharacteristic[0].realEstateTypeId;
          listing.mainPictureY = "https://static01.nyt.com/images/2019/06/25/realestate/25domestic-zeff/a1c1a1a36c9e4ff8adcb958c4276f28d-jumbo.jpg?quality=75&auto=webp";
          listing.descY = post.fullDescription;
          receivedOffersData.push(listing);
        });
      });
    };
    const store = useStore();
    let populateReceived = async () => {
      currentOwnerId.value = store.state.ownerId;
      let data = await AnnounceMainDetailsAPI.getAllAnnounceMainDetailsFromOwner(
        currentOwnerId.value
      );
       parseData(data);
    };
    return {
      receivedOffersData,
      receivedOffersCount,
      populateReceived,
      currentOwnerId,
      yourOffersData
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
