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
     <template v-slot:append>
          <div class="pa-2">
            <v-btn block class="search-btn">
              Search
            </v-btn>
          </div>
        </template> 
  </v-navigation-drawer>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Filters from "@/components/Filters.vue";
import MiniCardsList from "@/components/MiniCardsList.vue";
export default {
  name: "SideFilterBar",
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

.search-btn {
  background-color: rgb(1, 83, 81);
  color: white;
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

/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 200px) {
  .btnPressed, .btnNotPressed {
    font-size: 0.5em;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .btnPressed, .btnNotPressed {
    font-size: 0.5em;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 700px) {
  .btnPressed, .btnNotPressed {
    font-size: 0.6em;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .btnPressed, .btnNotPressed {
    font-size: 0.9em;
  }
}
</style>
