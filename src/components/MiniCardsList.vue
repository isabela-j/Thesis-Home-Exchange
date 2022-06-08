<template>
  <v-container class="pa-0">  
        <v-row v-for="(miniCard, index) in miniCards" :key="index" dense>
        <v-col :key="index">
            <MiniCard
            :title="miniCard.title"
            :type="miniCard.type"
            :details="miniCard.details"
            :price="miniCard.price"  
            :baths="miniCard.baths"
            :beds="miniCard.beds"
            :parkingLot="miniCard.parkingLot"      
            />
            <v-divider></v-divider>
        </v-col>
        </v-row>
  </v-container>
</template>

<script>
import MiniCard from "@/components/MiniCard.vue";
import { ref } from "vue";

export default {
  name: "MiniCardsList",
  components: {
    MiniCard,
  },
  setup(props) {
    let miniCards = ref(props.cardsData);
    return {
      miniCards,
    };
  },
  props: [ "cardsData" ],
};
</script>
