<template>
  <v-container fluid>
    <v-row class="ma-1"
      ><label class="main-label"> Main Characteristics </label>
    </v-row>
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Type </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ type }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Street </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ street }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Bedrooms </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ bedrooms }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Bathrooms </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ bathrooms }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Partition </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ partition }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Floor </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ floor }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Parking lots </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ parkingNo }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Sqft </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ sqft }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Balcony </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ balconyNo }} </label>
      </v-col>
    </v-row>
    <v-divider horizontal class="divider-custom mx-1" />
    <v-row class="ma-1">
      <v-col :key="1">
        <label class="title-label"> Construction year </label>
      </v-col>
      <v-col :key="2">
        <label class="text-label"> {{ construction }} </label>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MainCharacteristics",
  setup(props) {
    let type = ref(props.type);
    let street = ref(props.street);
    let bedrooms = ref(props.bedrooms);
    let bathrooms = ref(props.bathrooms);
    let partition = ref(props.partition);
    let floor = ref(props.floor);
    let parkingNo = ref(props.parkingNo);
    let sqft = ref(props.sqft);
    let balconyNo = ref(props.balconyNo);
    let construction = ref(props.construction);
    return {
      type,
      street,
      bedrooms,
      bathrooms,
      partition,
      floor,
      parkingNo,
      sqft,
      balconyNo,
      construction,
    };
  },
  props: ["type", "street", "bedrooms", "bathrooms", "partition", "floor", "parkingNo", "sqft", "balconyNo", "construction"],
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
