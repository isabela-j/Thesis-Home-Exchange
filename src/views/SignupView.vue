<template>
  <span class="container-custom center-content">
    <v-card class="container overflow-y-auto" >
      <v-container style="width: 80%" fluid class=" overflow-y-auto"  v-scroll.self="onScroll">
        <div class="center-content pa-6">
          <font-awesome-icon icon="fingerprint" class="fa-w fa-3x" />
        </div>
        <v-text-field label="First name" variant="underlined" height="4em">
          <template v-slot:append>
            <v-icon icon="mdi-account" color="rgb(139, 177, 176)" />
          </template>
        </v-text-field>
        <v-text-field label="Last name" variant="underlined" height="4em">
          <template v-slot:append>
            <v-icon icon="mdi-account" color="rgb(139, 177, 176)" />
          </template>
        </v-text-field>
        <v-text-field label="Phone number" variant="underlined" height="4em">
          <template v-slot:append>
            <v-icon icon="mdi-phone" color="rgb(139, 177, 176)" />
          </template>
        </v-text-field>
        <v-text-field label="E-mail" required variant="underlined" height="4em">
          <template v-slot:append>
            <v-icon icon="mdi-email" color="rgb(139, 177, 176)" />
          </template>
        </v-text-field>
        <v-text-field
          :type="showPass ? 'text' : 'password'"
          name="input-10-2"
          v-model="password"
          label="Password"
          class="input-group--focused"
          variant="underlined"
          height="4em"
        >
          <template v-slot:append>
            <v-icon
              v-if="showPass"
              @click="showPass = !showPass"
              icon="mdi-eye"
              color="rgb(139, 177, 176)"
            />
            <v-icon
              v-else
              icon="mdi-eye-off"
              @click="showPass = !showPass"
              color="rgb(139, 177, 176)"
            />
          </template>
        </v-text-field>
        <v-text-field
          label="Password confirmation"
          :type="showPass ? 'text' : 'password'"
          name="input-10-2"
          v-model="passwordConfirmation"
          hide-details="auto"
          class="input-group--focused"
          variant="underlined"
          height="4em"
        >
          <template v-slot:append>
            <v-icon
              v-if="showPassConf"
              @click="showPassConf = !showPassConf"
              icon="mdi-eye"
              color="rgb(139, 177, 176)"
            />
            <v-icon
              v-else
              icon="mdi-eye-off"
              @click="showPassConf = !showPassConf"
              color="rgb(139, 177, 176)"
            />
          </template>
        </v-text-field>
        <div class="center-content pa-2 ma-2">
          <v-btn class="btn-login"> Sign up </v-btn>
        </div>
      </v-container>
      <div style="text-align: center">
          <label class="main-label">Already have an account?</label>
          <a class="btn-redirect" href="/login"> Login </a>
        </div>
    </v-card>
  </span>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "SignupView",
  setup() {
    let showPass = ref(false);
    let showPassConf = ref(false);
    let password = ref("");
    let passwordConfirmation = ref("");
    let scrollInvoked = ref(0);
    let onScroll = () => {
        scrollInvoked.value ++;
        console.log(scrollInvoked)
    }
    return {
      showPass,
      showPassConf,
      password,
      passwordConfirmation,
      scrollInvoked,
      onScroll
    };
  },
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

.label-type {
    font-weight: normal;
}
.bottom-div {
  position: relative;
}
::v-deep(.v-text-field label) {
  color: rgb(139, 177, 176);
}

::v-deep(.v-text-field .v-input__details)
{
  margin-bottom: 0px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 300px) {
   ::v-deep(.v-text-field label) {
    font-size: 0.5em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.7em;
  }
  .container {
    height: 35em;
    width: 20em;
  }
   .main-label {
    font-size: 10px;
  }
  .btn-redirect {
    font-size: 10px;
  }
   .btn-login {
    font-size: 11px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
   ::v-deep(.v-text-field label) {
    font-size: 0.6em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.8em;
  }
    .container {
    height: 30em;
    width: 25em;
  }
   .main-label {
    font-size: 11px;
  }
  .btn-redirect {
    font-size: 11px;
  }
   .btn-login {
    font-size: 12px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 700px, min-height:700px) {
  ::v-deep(.v-text-field label) {
    font-size: 0.7em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.9em;
  }
  .container {
    height: 45em;
    width: 30em;
  }
   .main-label {
    font-size: 12px;
  }
  .btn-redirect {
    font-size: 12px;
  }
   .btn-login {
    font-size: 13px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

  ::v-deep(.v-text-field label) {
    font-size: 0.8em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 1em;
  }
    .container {
    height: 50em;
    width: 35em;
  }
   .main-label {
    font-size: 13px;
  }
  .btn-redirect {
    font-size: 13px;
  }
   .btn-login {
    font-size: 14px;
  }
}

@media only screen and (max-width: 1800px) and (min-height: 200px) {
   ::v-deep(.v-text-field label) {
    font-size: 0.8em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.8em;
  }
  .container {
    height: 40em;
    width: 24em;
  }
   .main-label {
    font-size: 11px;
  }
  .btn-redirect {
    font-size: 11px;
  }
   .btn-login {
    font-size: 11px;
  }
}

@media only screen and (min-width: 1366px) and (max-height: 900px) {
    .container {
    height: 40em;
    width: 30em;
  }
}
</style>

