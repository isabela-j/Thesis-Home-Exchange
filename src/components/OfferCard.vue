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
              <v-col :key="4" class="cardOfferType">• {{ offerType }}</v-col>
              <v-col v-if="showSave" :key="5" align="right">
                <v-btn
                  v-if="isSaved"
                  @click="addToFavourites"
                  class="btnFav btnClicked"
                  ><font-awesome-icon icon="bookmark" class="fa-cow"
                /></v-btn>
                <v-btn v-else @click="addToFavourites" class="btnFav">
                  <font-awesome-icon icon="bookmark" class="fa-cog" />
                </v-btn>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col :key="6" class="cardOfferDetails"
                >{{ ShortDetails }}
              </v-col>
            </v-row>
            <v-row class="pab" dense>
              <v-col :key="7" class="priceFont align-self-end"
                >{{ price }}€</v-col
              >
              <v-col :key="8" align="right">
                <v-btn
                  v-if="isRequested"
                  class="btn btnClicked"
                  @click="requestOffer"
                  >Offer requested</v-btn
                >
                <v-btn
                  v-else
                  class="btn btnNormal"
                  @click="GoToLocation('/announce')"
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
  name: "OfferCard",
  setup(props) {
    const offerType = computed(() => {
      return props.type > 0 ? "House" : "Apartment";
    });

    let isRequested = ref(props.offerRequested);
    let requestOffer = () => {
      isRequested.value = !isRequested.value;
      var savedData = {
        userId: 1,
        announceId: 2,
      };
      /* axios.post("deleteRequest", savedData)
       */
    };

    let isSaved = ref(props.offerSaved);
    let showSave = ref(props.showSaveBtn);

    let addToFavourites = () => {
      isSaved.value = !isSaved.value;
      var savedData = {
        userId: 1,
        announceId: 2,
      };
      if (isSaved.value) {
        /* axios.post("saveAnnounce", savedData)
         */
      } else {
        /* axios.post("unsaveAnnounce", savedData)
         */
      }
    };
    let GoToLocation = (location) => {
      window.location = location;
    };

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
      ShortDetails,
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
    "beds",
    "baths",
    "parkingLot",
  ],
};
</script>

<style scoped>
.btn {
  border-radius: 50px;
  border: 2.5px solid rgb(1, 83, 81);
  text-transform: none;
}
.btnNormal {
  color: rgb(1, 83, 81);
  font-weight: bold;
}
.btnClicked {
  background-color: rgb(1, 83, 81);
  color: white;
}
.priceFont {
  font-weight: bold;
  color: rgb(1, 83, 81);
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
.fa-cog {
  color: rgb(1, 83, 81);
}

.fa-cow {
  color: white;
}

.btnFav {
  min-width: none;
  border-radius: 180px;
  border: 2.5px solid rgb(1, 83, 81);
}

.btnFav:hover {
  border: 2.6px solid rgb(0, 80, 78);
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
    border: 1.3px solid rgb(1, 83, 81);
    display: block;
    height: 25px;
  }
  .btnFav {
    height: 25px;
    border-radius: 30px;
    border: 1.3px solid rgb(1, 83, 81);
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
    border: 1.3px solid rgb(1, 83, 81);
    height: 30px;
  }
  .btnFav {
    height: 30px;
    border-radius: 30px;
    border: 1.3px solid rgb(1, 83, 81);
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
    border: 1.7px solid rgb(1, 83, 81);
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
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
    border: 2.5px solid rgb(1, 83, 81);
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 2.5px solid rgb(1, 83, 81);
  }

  .cardTitle,
  .cardOfferDetails,
  .cardOfferType {
    font-size: 15px;
  }
}
</style>
