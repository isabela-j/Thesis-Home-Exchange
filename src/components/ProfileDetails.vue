<template>
  <v-card>
    <v-container fluid>
      <v-row dense>
        <v-col :key="1" class="cardTitle" md="auto">{{ title }}</v-col>
        <v-col :key="2" class="cardOfferType">• {{ offerType }}</v-col>
        <v-col :key="3" align="right">
          <v-btn
            v-if="isSaved && showRequest"
            @click="addToFavourites"
            class="btnFav btnClicked"
            ><font-awesome-icon icon="bookmark" class="fa-cow"
          /></v-btn>
          <v-btn
            v-else-if="!isSaved && showRequest"
            @click="addToFavourites"
            class="btnFav"
          >
            <font-awesome-icon icon="bookmark" class="fa-cog" />
          </v-btn>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col :key="4" class="cardOfferDetails">{{ details }} </v-col>
      </v-row>
      <v-row dense>
        <v-col :key="5" class="">{{ description }} </v-col>
      </v-row>
      <v-row class="pab" dense>
        <v-col :key="6" class="priceFont align-self-end">{{ price }}€</v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";
import OfferSavedAPI from "@/api/resources/OfferSaved.js";
import { useStore } from "vuex";
export default {
  name: "ProfileDetails",

  setup(props) {
    let currentOwnerId = ref();
    const offerType = computed(() => {
      return props.type > 0 ? "House" : "Apartment";
    });

    let isRequested = ref(props.offerRequested);
    let requestOffer = () => {
      isRequested.value = !isRequested.value;
    };

    let idAnnounce = ref(props.idAnnounce);

    let isSaved = ref(props.offerSaved);

    let showRequest = ref(props.showRequest);

    const store = useStore();
    let addToFavourites = async () => {
      currentOwnerId.value = store.state.ownerId;
      if (!isSaved.value) {
        try {
          let saveObj = {
            ownerId: currentOwnerId.value,
            announceMainDetailId: idAnnounce.value,
          };
          await OfferSavedAPI.store(saveObj, store.state.accessToken);
          isSaved.value = !isSaved.value;
        } catch (error) {
          if (error === 401) {
            GoToLocation("/login");
          }
        }
      } else {
        try {
          let offersSaved = await OfferSavedAPI.getAllOffersSavedByOwner(
            currentOwnerId.value,
            store.state.accessToken
          );
          offersSaved.forEach(async (offer) => {
            if (offer.announceMainDetailId == idAnnounce.value) {
              await OfferSavedAPI.delete(
                offer.id_offerSaved,
                store.state.accessToken
              );
            }
          });
          isSaved.value = !isSaved.value;
        } catch (error) {
          if (error === 401) {
            GoToLocation("/login");
          }
        }
      }
    };
    let GoToLocation = (location) => {
      window.location = location;
    };
    return {
      offerType,
      isRequested,
      requestOffer,
      isSaved,
      addToFavourites,
      idAnnounce,
      currentOwnerId,
      GoToLocation
    };
  },

  props: [
    "title",
    "details",
    "description",
    "type",
    "price",
    "offerRequested",
    "offerSaved",
    "idAnnounce",
    "showRequest",
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
  font-size: 17px;
}

.cardOfferType {
  font-weight: bold;
  color: rgba(200, 200, 200, 1);
  font-size: 17px;
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
  padding-top: 2rem;
}
.align-bot {
  align-content: bottom;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 500px) {
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
  .cardTitle {
    font-size: 11px;
  }
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
  .cardTitle {
    font-size: 13px;
  }
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
  .cardTitle {
    font-size: 15px;
  }
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

  .cardTitle {
    font-size: 17px;
  }
  .cardOfferDetails,
  .cardOfferType {
    font-size: 14px;
  }
}
</style>
