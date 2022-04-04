<template>
  <v-card class="ma-2">
  <v-container fluid>
    <v-row dense>
      <v-col :key="1" class="cardTitle" md="auto">{{ title }}</v-col>
      <v-col :key="2" class="cardOfferType">• {{ offerType }}</v-col>
      <v-col :key="3" align="right">
        <v-btn v-if="isSaved" @click="addToFavourites" class="btnFav btnClicked"
          ><font-awesome-icon icon="bookmark" class="fa-cow"
        /></v-btn>
        <v-btn v-else @click="addToFavourites" class="btnFav">
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
      <v-col :key="7" align="right">
        <v-btn v-if="isRequested" class="btn btnClicked" @click="requestOffer"
          >Offer requested</v-btn
        >
        <v-btn v-else class="btn btnNormal" @click="requestOffer"
          >Request an offer</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "ProfileDetails",

  setup(props) {
    const offerType = computed(() => {
      return props.type > 0 ? "House" : "Apartment";
    });

    let isRequested = ref(props.offerRequested);
    let requestOffer =() => {
      isRequested.value = !isRequested.value;
    };

    let isSaved = ref(props.offerSaved);
    let addToFavourites=() => {
      isSaved.value = !isSaved.value;
    }
    return {
      offerType,
      isRequested,
      requestOffer,
      isSaved,
      addToFavourites
    };
  },

  props: ["title", "details", "description", "type", "price", "offerRequested", "offerSaved"],
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
</style>
