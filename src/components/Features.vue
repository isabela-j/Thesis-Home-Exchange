<template>
  <v-container fluid>
    <v-row class="ma-1"><label class="main-label"> Features </label> </v-row>
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Modern furniture </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(furniture) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Electric stove </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(electricStove) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Washing machine </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(washingMachine) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Dishwasher </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(dishwasher) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Garage </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(garage) }} </label>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "Features",
  setup(props) {
    let furniture = ref(props.furniture);
    let electricStove = ref(props.electricStove);
    let washingMachine = ref(props.washingMachine);
    let dishwasher = ref(props.dishwasher);
    let garage = ref(props.garage);
    let GetAnswer = (param) => {
      return param == "true" ? "Yes" : "No";
    };
    return {
      furniture,
      electricStove,
      washingMachine,
      dishwasher,
      garage,
      GetAnswer,
    };
  },
  props: ["furniture", "electricStove", "washingMachine", "dishwasher", "garage"]
};
</script>

<style scoped>
.divider-custom {
  background-color: rgb(208, 208, 198);
}
.main-label {
  font-size: 1.1em;
  font-weight: bold;
  color: rgb(1, 83, 81);
}
.title-label {
  font-size: 1em;
  font-weight: bold;
  color: rgb(255, 164, 44);
}
.text-label {
  font-size: 1em;
  color: rgb(0, 0, 0);
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 599px) {
  .main-label {
    font-size: 0.8em;
  }
  .title-label,
  .text-label {
    font-size: 0.7em;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .main-label {
    font-size: 0.9em;
  }
  .title-label,
  .text-label {
    font-size: 0.8em;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .main-label {
    font-size: 1em;
  }
  .title-label,
  .text-label {
    font-size: 0.9em;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .main-label {
    font-size: 1.1em;
  }
  .title-label,
  .text-label {
    font-size: 1em;
  }
}
</style>
