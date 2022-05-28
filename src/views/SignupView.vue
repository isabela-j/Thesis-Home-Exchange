<template>
  <div style="position: relative">
    <span class="container-custom center-content backg">
      <v-card class="container overflow-y-auto">
        <v-container
          style="width: 80%"
          fluid
          class="overflow-y-auto"
          v-scroll.self="onScroll"
        >
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="center-content pa-6">
              <font-awesome-icon icon="fingerprint" class="fa-w fa-3x" />
            </div>
            <div class="center-content rev-pa">
              <v-radio-group
                v-model="radios"
                inline
                hide-details="auto"
                mandatory
              >
                <v-radio
                  label="Householder"
                  value="householder"
                  color="rgb(139, 177, 176)"
                ></v-radio>
                <v-radio
                  label="Broker"
                  value="broker"
                  color="rgb(139, 177, 176)"
                ></v-radio>
              </v-radio-group>
            </div>
            <v-text-field
              label="First name"
              v-model="ownerDetails.firstName"
              variant="underlined"
              height="4em"
            >
              <template v-slot:append>
                <v-icon icon="mdi-account" color="rgb(139, 177, 176)" />
              </template>
            </v-text-field>
            <v-text-field
              label="Last name"
              v-model="ownerDetails.lastName"
              variant="underlined"
              height="4em"
            >
              <template v-slot:append>
                <v-icon icon="mdi-account" color="rgb(139, 177, 176)" />
              </template>
            </v-text-field>
            <v-text-field
              label="Phone number"
              v-model="ownerDetails.phoneNumber"
              variant="underlined"
              height="4em"
            >
              <template v-slot:append>
                <v-icon icon="mdi-phone" color="rgb(139, 177, 176)" />
              </template>
            </v-text-field>
            <v-text-field
              label="E-mail"
              v-model="ownerMainData.emailAdress"
              required
              variant="underlined"
              height="4em"
            >
              <template v-slot:append>
                <v-icon icon="mdi-email" color="rgb(139, 177, 176)" />
              </template>
            </v-text-field>
            <v-text-field
              :type="showPass ? 'text' : 'password'"
              name="input-10-2"
              v-model="ownerMainData.passwordHash"
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
              <v-btn class="btn-login" @click="SignUp"> Sign up </v-btn>
            </div>
          </v-form>
        </v-container>
        <div style="text-align: center">
          <label class="main-label">Already have an account?</label>
          <a class="btn-redirect" href="/login"> Login </a>
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
import { ref, reactive } from "vue";
import LoginAPI from "@/api/resources/Login.js";
import OwnerAPI from "@/api/resources/Owner.js";

export default {
  name: "SignupView",
  setup() {
    let ownerMainData = reactive({
      emailAdress: "",
      passwordHash: "",
    });
    let ownerDetails = reactive({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      ownerTypeId: 1,
      loginId: 1,
    });
    let valid = ref(true);
    let showPass = ref(false);
    let showPassConf = ref(false);
    let passwordConfirmation = ref("");
    let scrollInvoked = ref(0);
    let radios = ref("householder");
    let onScroll = () => {
      scrollInvoked.value++;
      console.log(scrollInvoked);
    };
    let alertType = ref("warning");
    let alertMessage = ref("");
    let displayAlert = (message,type) => {
      alertType.value = type;
      alertMessage.value = message;
      document.getElementById("alert").style.display = "block";
      setTimeout(function () {
        document.getElementById("alert").style.display = "none";
      }, 5000);
    };
    let validateInput = () => {
      if (ownerDetails.firstName.length == 0) {
        displayAlert(
          "The first name input is mandatory. Please fill this field.",
          "warning"
        );
        return false;
      } else if (ownerDetails.lastName.length == 0) {
        displayAlert(
          "The last name input is mandatory. Please fill this field.",
          "warning"
        );
        return false;
      } else if (ownerDetails.phoneNumber.length == 0) {
        displayAlert(
          "The phone number input is mandatory. Please fill this field.",
          "warning"
        );
        return false;
      } else if (ownerMainData.emailAdress.length == 0) {
        displayAlert(
          "The email address input is mandatory. Please fill this field.",
          "warning"
        );
        return false;
      } else if (ownerMainData.passwordHash.length == 0) {
        displayAlert(
          "The password input is mandatory. Please fill this field.",
          "warning"
        );
        return false;
      } else if (passwordConfirmation.value.length == 0) {
        displayAlert(
          "The password confirmation input is mandatory. Please fill this field.",
          "warning"
        );
        return false;
      } else if (ownerMainData.passwordHash != passwordConfirmation.value) {
        displayAlert("The passwords don't match. Please rewrite.",
          "error");
        return false;
      }
      return true;
    };
    let SignUp = async () => {
      if (validateInput()) {
        ownerDetails.ownerTypeId = radios.value == "householder" ? 1 : 2;
        try {
          let res = await LoginAPI.store(ownerMainData);
          ownerDetails.loginId = JSON.parse(res.id);
          SignUpDetails();
        } catch (error) {
          displayAlert("The couldn't be created. Please try again later.",
          "error");
        }
      }
    };
    let SignUpDetails = async () => {
      try {
        let resDetails = await OwnerAPI.storeOwner(ownerDetails);
        LoginAPI.loginId = resDetails.id;
        console.log(LoginAPI.loginId);
        GoToLocation("/");
      } catch (error) {
        console.log(error.value);
      }
    };
    let GoToLocation = (location) => {
      window.location = location;
    };
    let validate = () => {
      this.$refs.form.validate();
    };
    return {
      showPass,
      showPassConf,
      passwordConfirmation,
      scrollInvoked,
      onScroll,
      radios,
      ownerMainData,
      ownerDetails,
      SignUp,
      SignUpDetails,
      GoToLocation,
      valid,
      validate,
      alertMessage,
      validateInput,
      displayAlert,
      alertType
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

.rev-pa {
  margin-left: -4%;
}

.show-on-top {
  z-index: 9;
}
.under {
  z-index: 0;
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

::v-deep(.v-radio-group label) {
  color: rgb(139, 177, 176);
  font-size: 1em;
}

::v-deep(.v-selection-control .v-icon) {
  color: rgb(139, 177, 176);
}

::v-deep(.v-text-field .v-input__details) {
  margin-bottom: 0px;
}

::v-deep(.v-radio-group) {
  width: fit-content;
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
