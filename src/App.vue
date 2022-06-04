<template>
  <v-app>
      <NavBar v-if="!$route.meta.hideNavbar" />
      <router-view/>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>


<style>
body {
  background-color: rgb(229, 229, 229) !important;
  font-family: 'Brush Script MT', cursive;
  font-size:14px;
}
</style>