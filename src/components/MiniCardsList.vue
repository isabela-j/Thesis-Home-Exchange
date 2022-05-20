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
  setup() {
    let miniCards = ref([
      {
        title: "Marasti Street Nr 3",
        type: 1,
        details: "5 bed- 2 baths- 2 parking lot",
        price: "280 000",
        mainPicture:
          "https://i.pinimg.com/originals/c6/22/db/c622dbe2fe29de580782f8b398981fe2.jpg",
      },
      {
        title: "Manastur Street Nr 14",
        type: 0,
        details: "2 bed- 2 baths- 1 parking lot",
        price: "150 000",
        mainPicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pX8r5RuQHRfLCm2J3KeURgesF9hCZ7QRMA&usqp=CAU",
      },
      {
        title: "Gheorgheni Street Nr 256A",
        type: 0,
        details: "3 bed- 2 baths- 2 parking lot",
        price: "105 000",
        mainPicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pX8r5RuQHRfLCm2J3KeUssesF9hCZ7QRMA&usqp=CAU",
      },
      {
        title: "Alexandru Vaida Voievod ",
        type: 1,
        details: "4 bed- 2 baths",
        price: "230 000",
        mainPicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pX8r5RuQHRfLCm2J3KeUfesF9hCZ7QRMA&usqp=CAU",
      },
    ]);
    return {
      miniCards,
    };
  },
};
</script>
