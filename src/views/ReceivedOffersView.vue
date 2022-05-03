<template>
  <v-main>
    <v-container class="container-custom" fluid>
      <label class="bold pa-3">
        {{ receivedOffersCount }} received offers</label
      >
      <v-row v-for="(item, index) in receivedOffersData" :key="index" dense>
        <v-col :key="index">
          <SentReceivedCard
            :title="item.title"
            :type="item.type"
            :beds= "item.beds"
            :baths = "item.baths"
            :parkingLot = "item.parkingLot"
            :price="item.price"
            :offerRequested="item.offerRequested"
            :offerSaved="item.offerSaved"
            :mainPicture="item.mainPicture"
            :message="item.message"
            :offerStatus="item.offerStatus"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref, computed } from "vue";
import SentReceivedCard from "@/components/SentReceivedCard.vue";
export default {
  name: "ReceivedOfferView",
  components: {
    SentReceivedCard,
  },
  setup() {
    const receivedOffersData = ref([
      {
        title: "Marasti Street Nr 3",
        type: 1,
        beds: 4,
        baths: 2,
        parkingLot: 1,
        price: "230 000",
        offerRequested: true,
        offerSaved: true,
        mainPicture:
          "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706",
        message: "this is a message sent",
        offerStatus: 0,
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
        mainPicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZoqOcp2UUh7Y2bXVpo46koYw29UamuHWiQ&usqp=CAU",
        message: "this is a another message",
        offerStatus: 0,
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
        mainPicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4O9GCySQw_9C24XfInhq-lYgfnHlRSMB5g&usqp=CAU",
        message:
          "f type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of L",
        offerStatus: 1,
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
        mainPicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLSG2pHU9KTA7tHA62H0jXspw4tzlr1UYBg&usqp=CAU",
        message:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors",
        offerStatus: 2,
      },
    ]);
    const receivedOffersCount = computed(() => {
      return receivedOffersData.value.length;
    });
    return {
      receivedOffersData,
      receivedOffersCount,
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
