<template>
  <v-card>
    <v-list-item>
        <v-container fluid>
          <v-row dense>
            <v-col :key="2" class="pad-0">
              <v-container fluid>
                <v-row dense>
                  <v-col :key="3" class="cardTitle text" md="auto">{{
                    title
                  }}</v-col>
                </v-row>
                <v-row dense>
                  <v-col :key="4" class="cardOfferType text">{{ offerType }}</v-col>
                </v-row>
                <v-row dense>
                  <v-col :key="6" class="cardOfferDetails text"
                    >{{ details }}
                  </v-col>
                </v-row>
                <v-row dense>
                  <v-col :key="7" class="priceFont align-self-end text"
                    >{{ price }}€</v-col
                  >
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
    </v-list-item>
  </v-card>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MiniCard",
  setup(props) {
    const offerType = computed(() => {
      return props.type > 0 ? "House" : "Apartment";
    });
    return {
      offerType,
    };
  },

  props: ["title", "details", "type", "price", "mainPicture"],
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

.text {
    font-size: 92%;
}

.color-org {
    color: rgb(252,158,1);
}
</style>
