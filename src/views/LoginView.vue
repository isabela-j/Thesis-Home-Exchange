<template>
  <div style="position: relative">
    <span class="container-custom center-content backg">
      <v-card class="container">
        <v-container style="width: 80%" fluid>
          <div class="center-content pa-10">
            <font-awesome-icon icon="fingerprint" class="fa-w fa-3x" />
          </div>
          <v-text-field
            label="email address"
            v-model="loginData.emailAdress"
            variant="underlined"
          >
            <template v-slot:append>
              <v-icon icon="mdi-email" color="rgb(139, 177, 176)" />
            </template>
          </v-text-field>
          <v-text-field
            label="password"
            v-model="loginData.password"
            hide-details="auto"
            variant="underlined"
            :type="showPass ? 'text' : 'password'"
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
          <div class="center-content pa-2 ma-2">
            <v-btn class="btn-login" @click="login"> Login </v-btn>
          </div>
        </v-container>
        <div style="text-align: center">
          <label class="main-label">Don't have an account?</label>
          <a class="btn-redirect" href="/signup"> Sign up </a>
        </div>
      </v-card>
    </span>
  </div>
  <div id="alert" style="position: absolute; display: none; align-self: center">
    <v-alert density="default" :type="alertType" closable>
      {{ alertMessage }}
    </v-alert>
  </div>
</template>

<script>
import { ref, reactive, computed } from "vue";
import LoginAPI from "@/api/resources/Login.js";
import { useStore } from "vuex";

export default {
  name: "LoginView",
  created() {
    this.loadPage();
  },
  setup() {
    let showPass = ref(false);
    let loadLogins = ref([]);
    let loginData = reactive({
      emailAdress: "",
      password: "",
    });
    let loadPage = () => {
      store.commit("updateId", 0);
    };
    let login = async () => {
      if (validateInput()) {
        try {
          let token = await LoginAPI.getAcessToken(loginData);
          store.commit('updateToken', token.access_token);

          let userData = await LoginAPI.get(store.state.accessToken);
          store.commit('updateLoginId', JSON.parse(userData.loginId));
          store.commit('updateId', JSON.parse(userData.owner[0].id_owner));

          GoToLocation("/");
        } catch (error) {
          displayAlert("Couldn't login. Please try again later", "error");
        }
      }
    };
    let validateInput = () => {
      if (loginData.emailAdress.length == 0) {
        displayAlert(
          "The email input is mandatory. Please fill this field.",
          "warning"
        );
        return false;
      } else if (loginData.password.length == 0) {
        displayAlert(
          "The password input is mandatory. Please fill this field.",
          "warning"
        );
        return false;
      }
      return true;
    };
    let alertType = ref("warning");
    let alertMessage = ref("");
    let displayAlert = (message, type) => {
      alertType.value = type;
      alertMessage.value = message;
      document.getElementById("alert").style.display = "block";
      setTimeout(function () {
        document.getElementById("alert").style.display = "none";
      }, 5000);
    };
    let GoToLocation = (location) => {
      window.location = location;
    };
    const store = useStore();
    return {
      updateId: (newId) => store.commit("updateId", newId),
      showPass,
      login,
      loginData,
      alertMessage,
      alertType,
      displayAlert,
      GoToLocation,
      loadPage,
    };
  },
};
</script>

<style scoped>
.backg {
  background: url("@/assets/img/image.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}
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
::v-deep(.v-text-field .v-input__details) {
  margin-bottom: 0px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 300px) {
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
  .backg {
    background: url("@/assets/img/cover-ph-blur.jpg") no-repeat center center
      fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px) {
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
  .backg {
    background: url("@/assets/img/cover-ph-blur.jpg") no-repeat center center
      fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 700px, min-height:700px) {
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
  .backg {
    background: url("@/assets/img/cover-ph-blur.jpg") no-repeat center center
      fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
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

@media only screen and (max-width: 1200px) and (min-height: 200px) {
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
