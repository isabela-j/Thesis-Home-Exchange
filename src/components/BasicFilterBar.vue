<template>
  <v-container class="container-custom">
    <v-btn
        v-if="showPreferences"
        class="btnPressed w-50 "
        @click="setShowPreferences"
        >What you want</v-btn
      >
      <v-btn v-else class="btnNotPressed w-50 " @click="setShowPreferences"
        >What you want</v-btn
      >
      <v-btn
        v-if="showYourAnnounces"
        class="btnPressed w-50 "
        @click="setShowYourAnnounces"
        >What you have</v-btn
      >
      <v-btn v-else class="btnNotPressed w-50 " @click="setShowYourAnnounces"
        >What you have</v-btn
      >
    <Filters @newFilters="startFilter" v-if="showPreferences" />
    <MiniCardsList v-else />
  </v-container>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Filters from "@/components/Filters.vue";
import MiniCardsList from "@/components/MiniCardsList.vue";
export default {
  name: "BasicFilterBar",
  components: {
    Filters,
    MiniCardsList,
  },
  emits: ["filterPosts"],
  setup(_, { emit }) {
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
    let startFilter = (filters) => {
       emit("filterPosts", filters);
    }
    return {
      drawer,
      showPreferences,
      showYourAnnounces,
      setShowPreferences,
      setShowYourAnnounces,
      startFilter
    };
  },
};
</script>

<style scoped>
.container-custom {
    background-color: rgb(229, 229, 229);;
}
.btnPressed {
  border-radius: 0px;
  border: 2.5px solid white;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.btnNotPressed {
  border-radius: 0px;
  border-color:  rgb(1, 83, 81);
  background-color:  rgb(1, 83, 81);
  color: white;
  border: 2.5px solid  rgb(1, 83, 81);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.w-50 {
  width: 50%;
}

.w-100 {
  width: 100%;
}
.compact-form {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transform-origin-x: left;
  -webkit-transform-origin-y: top;
}
</style>
