<template>
  <span class="container-custom center-content">
    <v-card class="container">
      <v-container style="width: 80%;" fluid>
        <div class="center-content pa-10">
          <font-awesome-icon icon="fingerprint" class="fa-w fa-3x" />
        </div>
        <v-text-field label="email address" />
        <v-text-field label="password" hide-details="auto" />
        <div class="center-content pa-2 ma-2">
          <v-btn class="btn-login"> Login </v-btn>
        </div>
        <div style="position: absolute; bottom: 1em; text-align: center;">
          <label>Don't have an account?</label>
          <a class="btn-redirect" href="/"> Sign up </a>
        </div>
      </v-container>
    </v-card>
  </span>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style scoped>
.btn-login {
  text-transform: none;
  border-radius: 50px;
  border: 2.5px solid transparent;
  color: rgb(1, 83, 81);
  width: 50%;
  font-weight: bold;
}
.btn-redirect {
  background-color: rgb(1, 83, 81);
  color: rgb(139, 177, 176);
  text-decoration: underline;
  font-size: 13px;
  font-weight: bold;
}
.btn-redirect:hover {
  color: rgb(252, 158, 1);
}
.container-custom {
  background-color: rgb(229, 229, 229);
  height: 100vh;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  height: 50em;
  width: 35em;
  background-color: rgb(1, 83, 81);
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
}
.fa-w {
  color: white;
}
label {
  color: rgb(139, 177, 176);
  margin-top: 1em;
  font-weight: bold;
}
.bottom-div {
  position: relative;
}
::v-deep(.v-text-field label) {
  color: rgb(139, 177, 176);
}
</style>
