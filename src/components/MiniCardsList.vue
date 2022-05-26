<template>
  <v-container class="pa-0">  
    <!--v-radio-group  color="rgb(252,158,1)"-->
        <v-row v-for="(miniCard, index) in miniCards" :key="index" dense>
        <v-col :key="index">
            <MiniCard
            :title="miniCard.title"
            :type="miniCard.type"
            :details="miniCard.details"
            :price="miniCard.price"
            :mainPicture="miniCard.mainPicture"
            />
            <v-divider></v-divider>
        </v-col>
        </v-row>
    <!--/v-radio-group-->
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
