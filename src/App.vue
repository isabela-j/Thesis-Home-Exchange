<template>
  <v-app>
      <NavBar  />
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
  background-color: rgb(229, 229, 229);
  font-family: 'Brush Script MT', cursive;
  font-size:14px;
}
</style>