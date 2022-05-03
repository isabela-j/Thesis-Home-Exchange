<template>
  <v-card class="ma-2">
    <v-container fluid>
      <v-row dense>
        <v-col :key="1" md="auto" class="center-content">
          <v-img :src="mainPicture" height="156px" width="234px" />
        </v-col>
        <v-col :key="2" class="pad-0">
          <v-container fluid>
            <v-row dense>
              <v-col :key="3" class="cardTitle" md="auto">{{ title }}</v-col>
              <v-col :key="4" class="cardOfferType" md="auto"
                >• {{ offerType }}</v-col
              >
              <v-col :key="5" class="cardOfferDetails" md="auto"
                >• {{ ShortDetails }}
              </v-col>
              <v-col :key="6" class="priceFont align-self-end"
                >• {{ price }}€</v-col
              >
            </v-row>
            <v-row dense>
              <v-col :key="7" class="">{{ msg }}</v-col>
            </v-row>
            <v-row class="pab" dense>
              <v-col v-if="OfferInPending" :key="8" align="right">
                <v-btn v-if="isSentOffer" class="btn btnSentAccept" @click="UnsendOffer"
                  >Unsend offer</v-btn
                >
                <v-btn v-else class="btn btnSentAccept" @click="AcceptOffer">Accept offer</v-btn>
                <v-btn v-if="!isSentOffer" class="btn btnRefuse" @click="RefuseOffer">
                  Refuse Offer</v-btn
                >
              </v-col>
              <v-col v-else-if="OfferAccepted" :key="10" align="right"  class="acceptedLabel"> <label>The offer was accepted</label></v-col>
              <v-col v-else-if="OfferRefused" :key="11" align="right"  class="refusedLabel"><label>The offer was refused</label></v-col>
              <v-col v-if="OfferInPending" :key="9" align="right" md="auto">
                <v-btn class="btn btnClicked" @click="GoToLocation('/announce')"
                  >See details</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "SentReceivedCard",
  setup(props) {
    const offerType = computed(() => {
      return props.type > 0 ? "House" : "Apartment";
    });

    let isRequested = ref(props.offerRequested);
    let requestOffer = () => {
      isRequested.value = !isRequested.value;
    };

    let isSaved = ref(props.offerSaved);
    let showSave = ref(props.showSaveBtn);

    let addToFavourites = () => {
      isSaved.value = !isSaved.value;
    };
    let GoToLocation = (location) => {
      window.location = location;
    };
    let msg = ref(props.message);
    let isSentOffer = ref(props.sentOffer);
    let offerStatus = ref(props.offerStatus);
    let AcceptOffer = () => {
      offerStatus.value = 1;
    };
     let RefuseOffer = () => {
      offerStatus.value = 2;
    };
    let UnsendOffer = () => {
      //delete offer from list
    }
    const OfferInPending = computed(() => {
      return offerStatus.value === 0 ? true : false;
    });
     const OfferAccepted = computed(() => {
      return offerStatus.value === 1 ? true : false;
    });
     const OfferRefused = computed(() => {
      return offerStatus.value === 2 ? true : false;
    });
    let beds = ref(props.beds);
    let baths = ref(props.baths);
    let parkingLot = ref(props.parkingLot);

    let ShortDetails = computed(() => {
      return (
        beds.value +
        " beds - " +
        baths.value +
        " baths - " +
        parkingLot.value +
        " parking lot"
      );
    });
    return {
      offerType,
      isRequested,
      requestOffer,
      isSaved,
      addToFavourites,
      showSave,
      GoToLocation,
      msg,
      isSentOffer,
      offerStatus,
      AcceptOffer,
      RefuseOffer,
      OfferInPending,
      OfferAccepted,
      OfferRefused,
      UnsendOffer,
      ShortDetails
    };
  },

  props: [
    "title",
    "type",
    "price",
    "offerRequested",
    "offerSaved",
    "mainPicture",
    "showSaveBtn",
    "message",
    "sentOffer",
    "offerStatus",
    "beds",
    "baths",
    "parkingLot"
  ],
};
</script>

<style scoped>
.btn {
  border-radius: 50px;
  text-transform: none;
}
.btnNormal {
  color: rgb(252, 143, 1);
  font-weight: bold;
}
.btnClicked {
  border: 2.5px solid rgb(252, 143, 1);
  background-color: rgb(252, 143, 1);
  color: white;
}

.btnSentAccept {
  background-color: rgb(1, 83, 81);
  border: 2.5px solid rgb(1, 83, 81);
  color: white;
}

.btnRefuse {
  background-color: rgb(199, 62, 62);
  border: 2.5px solid rgb(199, 62, 62);
  color: white;
  margin-left: 0.5em;
}
.acceptedLabel {
  color:  rgb(1, 83, 81);
  font-weight: bold;
 }
.refusedLabel {
  color:rgb(199, 62, 62); 
   font-weight: bold;
}
.priceFont {
  font-weight: bold;
  color: rgba(200, 200, 200, 1);
}
.cardTitle {
  font-weight: bold;
  font-size: 15px;
}

.cardOfferType {
  font-weight: bold;
  color: rgba(200, 200, 200, 1);
  font-size: 15px;
}

.cardOfferDetails {
  font-weight: bold;
  color: rgba(200, 200, 200, 1);
}
.pab {
  padding-top: 2%;
}
.align-bot {
  align-content: bottom;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 500px) {
  div {
    font-size: 8px;
  }
  .btn {
    font-size: 8px;
    border-radius: 30px;
    display: block;
    height: 25px;
  }
  .btnFav {
    height: 25px;
    border-radius: 30px;
  }
  .cardTitle,
  .cardOfferDetails,
  .cardOfferType {
    font-size: 9px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  div {
    font-size: 10px;
  }
  .btn {
    font-size: 8px;
    border-radius: 30px;
    height: 30px;
  }
  .btnFav {
    height: 30px;
    border-radius: 30px;
  }
  .cardTitle,
  .cardOfferDetails,
  .cardOfferType {
    font-size: 11px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
  }
  .cardTitle,
  .cardOfferDetails,
  .cardOfferType {
    font-size: 13px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  div {
    font-size: 14px;
  }
  .btn {
    font-size: 14px;
    border-radius: 50px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
  }

  .cardTitle,
  .cardOfferDetails,
  .cardOfferType {
    font-size: 15px;
  }
}
</style>
