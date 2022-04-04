<template>
  <v-navigation-drawer v-model="drawer" :width="400" permanent clipped flat app  bottom class="compact-form">
    <v-btn v-if="showPreferences" class="btnPressed" @click="setShowPreferences"
      >What you want</v-btn
    >
    <v-btn v-else class="btnNotPressed" @click="setShowPreferences"
      >What you want</v-btn
    >
    <v-btn v-if="showYourAnnounces" class="btnPressed" @click="setShowYourAnnounces"
      >What you have</v-btn
    >
    <v-btn v-else class="btnNotPressed" @click="setShowYourAnnounces"
      >What you have</v-btn
    >
    <Filters v-if="showPreferences" />
    <MiniCardsList v-else/>
  </v-navigation-drawer>
</template>

<script>
import { ref } from "vue";
import Filters from "@/components/Filters.vue";
import MiniCardsList from "@/components/MiniCardsList.vue";
export default {
  name: "FilterBar",
  components: {
    Filters,
    MiniCardsList,
  },
  setup() {
    let showPreferences = ref(true);
    let showYourAnnounces = ref(false);
    let drawer = ref(true);
    let setShowPreferences = () => {
      if (!showPreferences.value) {
        showPreferences.value = !showPreferences.value;
        showYourAnnounces.value = !showPreferences.value;
      }
    };
    let setShowYourAnnounces = () => {
      if (!showYourAnnounces.value) {
        showPreferences.value = !showPreferences.value;
        showYourAnnounces.value = !showPreferences.value;
      }
    };
    return {
      drawer,
      showPreferences,
      showYourAnnounces,
      setShowPreferences,
      setShowYourAnnounces,
    };
  },
};
</script>

<style scoped>
.btnPressed {
  border-radius: 0px;
  border: 2.5px solid white;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 50%;
}
.btnNotPressed {
  border-radius: 0px;
  border-color: rgb(252, 158, 1);
  background-color: rgb(252, 158, 1);
  color: white;
  border: 2.5px solid rgb(252, 158, 1);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 50%;
}
.compact-form {
    -webkit-transform: scale(0.800);
    transform: scale(0.800);
    -webkit-transform-origin-x: left;
    -webkit-transform-origin-y: top;
}
</style>
