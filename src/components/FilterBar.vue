<template>
  <v-navigation-drawer
    v-model="drawer"
    :width="windowSize"
    permanent
    clipped
    flat
    app
    bottom
    class="compact-form filter-resize"
  >
    <div v-if="windowSize / 0.2 < 800">
      <v-btn
        v-if="showPreferences"
        class="btnPressed w-100"
        @click="setShowPreferences"
        >What you want</v-btn
      >
      <v-btn v-else class="btnNotPressed w-100" @click="setShowPreferences"
        >What you want</v-btn
      >
      <div/>
      <v-btn
        v-if="showYourAnnounces"
        class="btnPressed w-100"
        @click="setShowYourAnnounces"
        >What you have</v-btn
      >
      <v-btn v-else class="btnNotPressed w-100" @click="setShowYourAnnounces"
        >What you have</v-btn
      >
    </div>
    <div v-else>
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
    </div>
    <Filters v-if="showPreferences" />
    <MiniCardsList v-else />
  </v-navigation-drawer>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
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
    const windowSize = ref(window.innerWidth * 0.25);
    onMounted(() => {
      window.addEventListener("resize", () => {
        windowSize.value = window.innerWidth * 0.25;
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        windowSize.value = window.innerWidth * 0.25;
      });
    });
    return {
      drawer,
      showPreferences,
      showYourAnnounces,
      setShowPreferences,
      setShowYourAnnounces,
      windowSize,
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
}

.w-50 {
  width: 50%;
}

.w-100 {
  width:100%;
}
.compact-form {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transform-origin-x: left;
  -webkit-transform-origin-y: top;
}
</style>
