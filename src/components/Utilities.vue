<template>
  <v-container fluid>
    <v-row class="ma-1"><label class="main-label"> Utilities </label> </v-row>
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Electrical curent </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(electrical) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Water pipe </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(waterPipe) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Sewerage </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(sewerage) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Gas pipe </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(gasPipe) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Thermal power station </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(thermalPS) }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Underfloor heating </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ GetAnswer(underfloorHeating) }} </label>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "Utilities",
  setup(props) {
    let electrical = ref(props.electrical);
    let waterPipe = ref(props.waterPipe);
    let sewerage = ref(props.sewerage);
    let gasPipe = ref(props.gasPipe);
    let thermalPS = ref(props.thermalPS);
    let underfloorHeating = ref(props.underfloorHeating);
    let GetAnswer = (param) => {
      return param == "true" ? "Yes" : "No";
    };
    return {
      electrical,
      waterPipe,
      sewerage,
      gasPipe,
      thermalPS,
      underfloorHeating,
      GetAnswer,
    };
  },
  props: ["electrical","waterPipe", "sewerage", "gasPipe", "thermalPS", "underfloorHeating"],
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
