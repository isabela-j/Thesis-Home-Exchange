<template>
  <v-app-bar color="rgb(1, 83, 81)" dense dark clipped-left height="50" app>
    <v-toolbar-title>Home Exchange</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-if="largeScreen" class="btn">Add an offer </v-btn>
    <v-btn v-if="largeScreen" class="btn">My offers </v-btn>
    <v-btn v-if="largeScreen" class="btn">Offers Sent</v-btn>
    <v-btn v-if="largeScreen" class="btn">Offers Received</v-btn>
    <v-btn v-if="largeScreen" class="btn">Saved</v-btn>

    <v-menu left bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" class="btnIcon">
          <v-app-bar-nav-icon class="btnIcon"></v-app-bar-nav-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
export default {
  name: "NavBar",
  setup () {
    const IsNOTMobileWidth = () => {
        return window.innerWidth > 750;
    };
    const largeScreen= ref(IsNOTMobileWidth());
    onMounted(() => {
      window.addEventListener("resize", () => {
        largeScreen.value = IsNOTMobileWidth();
      });
    });
    onUnmounted(() => {
      window.removeEventListener("resize", () => {
        largeScreen.value = IsNOTMobileWidth();
      });
    });
    return {
      IsNOTMobileWidth,
      largeScreen
    };
  }
};
</script>

<style scoped>
.btnIcon {
  background-color: rgb(1, 83, 81);
  color: white;
}

.btn {
  background-color: rgb(1, 83, 81);
  color: white;
  text-transform: none;
  font-size: 13px;
}
</style>
