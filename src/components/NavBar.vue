<template>
  <v-app-bar color="rgb(1, 83, 81)" dense dark clipped-left height="50" app>
    <v-toolbar-title @click="GoToLocation('/')"
      ><img src="../assets/img/logo.png" style="width: 110px"
    /></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-if="largeScreen"
      class="btn org-bkg"
      @click="GoToLocation('/addoffer')"
      >Add an offer
    </v-btn>
    <v-btn v-if="largeScreen" class="btn" @click="GoToLocation('/myOffers')"
      >My offers</v-btn
    >
    <v-btn v-if="largeScreen" class="btn" @click="GoToLocation('/sentOffers')"
      >Offers Sent
    </v-btn>
    <v-btn
      v-if="largeScreen"
      class="btn"
      @click="GoToLocation('/receivedOffers')"
      >Offers Received</v-btn
    >
    <v-btn v-if="largeScreen" class="btn" @click="GoToLocation('/savedOffers')"
      >Saved</v-btn
    >

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
        :title="userTitle"
        :subtitle="userDescription"
        :key = "dataKey"
      ></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        title="Home"
        @click="GoToLocation('/')"
        value="home"
      ></v-list-item>
      <v-list-item
        title="My Account"
        value="account"
        @click="GoToLocation('/editProfile')"
      ></v-list-item>
      <v-list-item
        title="Add an offer"
        value="addOffer"
        @click="GoToLocation('/addoffer')"
      ></v-list-item>
      <v-list-item
        title="My offers"
        value="myOffers"
        @click="GoToLocation('/myOffers')"
      ></v-list-item>
      <v-list-item
        title="Offers sent"
        value="offersSent"
        @click="GoToLocation('/sentOffers')"
      ></v-list-item>
      <v-list-item
        title="Offers received"
        value="offersReceived"
        @click="GoToLocation('/receivedOffers')"
      ></v-list-item>
      <v-list-item
        title="Saved"
        @click="GoToLocation('/savedOffers')"
        value="saved"
      ></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block class="logout-btn" @click="GoToLocation('/login')"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, reactive } from "vue";
import logo from "@/assets/logo.png";
import OwnerAPI from "@/api/resources/Owner.js";
import { useStore } from 'vuex';
export default {
  name: "NavBar",
  created() {
    this.populateUser();
  },
  setup() {
     const store = useStore();
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
    let showMenuBar = async () => {
      isMenuBarVisible.value = !isMenuBarVisible.value;
      if(isMenuBarVisible.value === true)
      {
       populateUser();
      }
    };
    let userTitle = ref("");
    let userDescription = ref("");
    let GoToLocation = (location) => {
      window.location = location;
    };
    let dataKey = ref(0);
    let populateUser = async () => {
      let details = await OwnerAPI.getOwner(store.state.ownerId);
      userTitle.value = details.firstName+" " + details.lastName;
      details.ownerTypeId === 1 ? userDescription.value = "Householder" : userDescription.value = "Broker";
      dataKey.value = dataKey.value+1;
    }
    let menuBarHeight = ref(window.innerHeight);
    return {
      IsNOTMobileWidth,
      largeScreen,
      isMenuBarVisible,
      showMenuBar,
      userTitle,
      userDescription,
      GoToLocation,
      menuBarHeight,
      populateUser,
      dataKey
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
::v-deep(.v-toolbar-title) {
  padding-left: 0px;
}

::v-deep(.v-toolbar-title):hover {
  cursor: pointer;
}
</style>
