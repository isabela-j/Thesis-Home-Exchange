<template>
    <v-app-bar
      color="rgb(1, 83, 81)"
      dense
      dark
      clipped-left
      app
    >
      <v-toolbar-title>Home Exchange</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="btn">Add an offer </v-btn>
      <v-btn class="btn">My offers </v-btn>
      <v-btn class="btn">Offers Sent</v-btn>
      <v-btn class="btn">Offers Received</v-btn>
      <v-btn class="btn">Saved</v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="btnIcon"
          >
            <v-app-bar-nav-icon class="btnIcon"></v-app-bar-nav-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
}
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
}
</style>

