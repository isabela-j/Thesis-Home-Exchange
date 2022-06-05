<template>
  <v-main>
    <v-container class="container-custom" fluid>
      <label class="bold pa-3"> {{ sentOffersCount }} sent offers</label>
      <v-row v-for="(item, index) in sentOffersData" :key="index" dense>
        <v-col :key="index">
          <SentReceivedCard
            :title="item.title"
            :type="item.type"
            :beds="item.bedroomsNo"
            :baths="item.bathroomsNo"
            :parkingLot="item.parkingLotsNo"
            :price="item.price"
            :mainPicture="item.mainPicture"
            :message="item.senderMessage"
            sentOffer="true"
            :offerStatus="item.offerAccepted"
            :titleY="item.titleY"
            :typeY="item.typeY"
            :bedsY="item.bedroomsNoY"
            :bathsY="item.bathroomsNoY"
            :parkingLotY="item.parkingLotsNoY"
            :priceY="item.priceY"
            :mainPictureY="item.mainPictureY"
            :senderPhoneNo="item.phoneNo"
            :senderEmail="item.ownerEmail"
            :descY="item.descY"
            :announceId = "item.id_received"
            :idSentReceived="item.id_offerSendAndReceived"
            :announceStatus="item.announceStatus"
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
import LoginAPI from "@/api/resources/Login.js";
import OwnerAPI from "@/api/resources/Owner.js";
import { useStore } from "vuex";
export default {
  name: "SentOfferView",
  components: {
    SentReceivedCard,
  },
  created() {
    this.populateSent();
  },
  setup() {
    let sentOffersData = reactive([]);
    let sentOffersCount = computed(() => {
      return sentOffersData.length > 0 ? sentOffersData.length : 0;
    });
    let currentOwnerId = ref();
    const store = useStore();
    let parseData = (data) => {
      data.forEach((post) => {
        post.offerSent.forEach(async (sent) => {
          let listing = sent;
          let announceData = await AnnounceMainDetailsAPI.getAnnounceMainDetail(
            sent.id_received,
            store.state.accessToken
          );
          let ownerData = await OwnerAPI.getOwner(announceData.ownerId, store.state.accessToken);
          listing.ownerEmail = ownerData.login.emailAdress;
          let ownerData2 = await OwnerAPI.getOwner(announceData.ownerId, store.state.accessToken);
          listing.phoneNo = ownerData2.phoneNumber;

          listing.announceStatus = announceData.announceStatus;
          listing.title = announceData.title;
          listing.bedroomsNo = announceData.bedroomsNo;
          listing.bathroomsNo = announceData.bathroomsNo;
          listing.parkingLotsNo = announceData.parkingLotsNo;
          listing.price = announceData.price;
          listing.type =
            announceData.announceCharacteristic[0].realEstateTypeId;
          if(announceData.image.length > 0)
          {
            listing.mainPicture = announceData.image[0].imageData;
          }

          listing.announceStatusY = post.announceStatus;
          listing.titleY = post.title;
          listing.bedroomsNoY = post.bedroomsNo;
          listing.bathroomsNoY = post.bathroomsNo;
          listing.parkingLotsNoY = post.parkingLotsNo;
          listing.priceY = post.price;
          listing.typeY = post.announceCharacteristic[0].realEstateTypeId;
         if(post.image.length > 0)
          {
            listing.mainPictureY = post.image[0].imageData;
          }
          listing.descY = post.fullDescription;
          sentOffersData.push(listing);
        });
      });
    };
    let populateSent = async () => {
      currentOwnerId.value = store.state.ownerId;
      let data = await OfferSentAndReceivedAPI.getAllOffersSentByOwner(
        currentOwnerId.value,
        store.state.accessToken
      );
      parseData(data);
    };

    return {
      sentOffersData,
      sentOffersCount,
      populateSent,
      currentOwnerId,
      parseData,
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
