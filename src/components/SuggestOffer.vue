<template>
  <v-card class="ma-2">
    <label class="bold pa-3 orange-clr">Suggest an offer: </label>
    <v-container fluid>
      <v-row dense>
        <v-col key="1">
          <v-text-field label="your name" hide-details="auto" />
          <v-text-field label="email" hide-details="auto" />
          <v-text-field label="phone number" hide-details="auto" />
        </v-col>
        <v-col key="2" class="d-flex" style="flex-direction:column">
        <v-textarea
          filled
          id="suggestMessage"
          label="Message"
          hide-details="auto"
          v-model="defaultText"
        ></v-textarea>
      </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "SuggestOffer",
  setup(){
      let changeLabel = () => {
          var a = document.getElementsById("suggestMessage").label;
          a.label = "message"
      };
      let defaultText = ref("this is a default text. thank u for wathcjnjhfgvgyuhjfberguyfr");
      return {
          changeLabel,
          defaultText
      }
  }
}
</script>


<style scoped>
.bold {
  font-size: 17px;
}
.orange-clr {
    color: rgb(252, 158, 22);
}
</style>