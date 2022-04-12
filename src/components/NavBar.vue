<template>
  <v-app-bar color="rgb(1, 83, 81)" dense dark clipped-left height="50" app>
    <v-toolbar-title>Home Exchange</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn v-if="largeScreen" class="btn org-bkg">Add an offer </v-btn>
    <v-btn v-if="largeScreen" class="btn">My offers </v-btn>
    <v-btn v-if="largeScreen" class="btn">Offers Sent</v-btn>
    <v-btn v-if="largeScreen" class="btn">Offers Received</v-btn>
    <v-btn v-if="largeScreen" class="btn">Saved</v-btn>

    <v-btn icon class="btnIcon" @click="showMenuBar">
      <v-app-bar-nav-icon class="btnIcon"></v-app-bar-nav-icon>
    </v-btn>
  </v-app-bar>
   <v-navigation-drawer
      absolute
      temporary
      position="right"
      v-model="isMenuBarVisible"
    >
    <template v-slot:prepend>
          <v-list-item
            two-line
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            :title="userTitle"
            :subtitle="userDescription"
          ></v-list-item>
        </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
          <v-list-item  title="Home" value="home"></v-list-item>
          <v-list-item  title="My Account" value="account"></v-list-item>
          <v-list-item  title="Add an offer" value="addOffer"></v-list-item>
          <v-list-item  title="My offers" value="myOffers"></v-list-item>
          <v-list-item  title="Offers sent" value="offersSent"></v-list-item>
          <v-list-item  title="Offers received" value="offersReceived"></v-list-item>
          <v-list-item  title="Saved" value="saved"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block class="logout-btn">
              Logout
            </v-btn>
          </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  name: "NavBar",
  setup() {
    const IsNOTMobileWidth = () => {
      return window.innerWidth > 750;
    };
    const largeScreen = ref(IsNOTMobileWidth());
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
    let isMenuBarVisible = ref(false);
    let showMenuBar = () => {
      console.log(isMenuBarVisible.value)
      isMenuBarVisible.value = !isMenuBarVisible.value;
    }
    let userTitle=ref("ileana");
    let userDescription=ref("cioban la oi");
    return {
      IsNOTMobileWidth,
      largeScreen,
      isMenuBarVisible,
      showMenuBar,
      userTitle,
      userDescription
    };
  },
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

.logout-btn {
  background-color: rgb(199, 62, 62);
  color: white;
  text-transform: none;
}

.org-bkg {
  background-color: rgb(252, 143, 1);
}
</style>
