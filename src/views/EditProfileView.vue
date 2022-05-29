<template>
  <div style="position: relative">
    <v-main class="container-custom">
      <v-card class="ma-8">
        <v-container fluid>
          <v-row dense>
            <v-col :key="1" cols="2" class="ma-2">
              <div
                style="
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <img src="https://randomuser.me/api/portraits/women/81.jpg" />
              </div>
            </v-col>
            <v-col :key="2">
              <div
                style="
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <v-file-input
                  v-model="pictures"
                  prepend-icon="mdi-camera"
                  accept="image/*"
                  hide-details="auto"
                />
              </div>
            </v-col>
          </v-row>
          <v-divider horizontal class="divider-custom mx-1" />
          <v-row dense>
            <v-col :key="1" cols="2">
              <div
                style="
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <label> Contact details </label>
              </div>
            </v-col>
            <v-col :key="2" class="ma-2">
              <v-text-field
                label="First name"
                variant="underlined"
                height="4em"
                v-model="userDetails.firstName"
              >
                <template v-slot:append>
                  <v-icon icon="mdi-account" color="rgb(139, 177, 176)" />
                </template>
              </v-text-field>
              <v-text-field
                label="Last name"
                variant="underlined"
                height="4em"
                v-model="userDetails.lastName"
              >
                <template v-slot:append>
                  <v-icon icon="mdi-account" color="rgb(139, 177, 176)" />
                </template>
              </v-text-field>
              <v-text-field
                label="Phone number"
                variant="underlined"
                height="4em"
                v-model="userDetails.phoneNumber"
              >
                <template v-slot:append>
                  <v-icon icon="mdi-phone" color="rgb(139, 177, 176)" />
                </template>
              </v-text-field>
              <v-text-field
                label="E-mail"
                required
                variant="underlined"
                height="4em"
                v-model="userMainData.emailAdress"
              >
                <template v-slot:append>
                  <v-icon icon="mdi-email" color="rgb(139, 177, 176)" />
                </template>
              </v-text-field>
            </v-col>
          </v-row>
          <v-divider horizontal class="divider-custom mx-1" />
          <v-row dense>
            <v-col :key="1" cols="2">
              <div
                style="
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <label> Password </label>
              </div>
            </v-col>
            <v-col :key="2" class="ma-2">
              <v-text-field
                :type="showPass ? 'text' : 'password'"
                name="input-10-2"
                v-model="userMainData.passwordHash"
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
                :type="showPassConf ? 'text' : 'password'"
                name="input-11-2"
                v-model="passwordConfirmation"
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
            </v-col>
          </v-row>
          <v-divider horizontal class="divider-custom mx-1" />
          <v-row dense class="ma-2">
            <v-col :key="1" cols="2">
              <v-btn class="btn logout-btn" width="100%"> Logout </v-btn>
            </v-col>
            <v-col :key="2"> </v-col>
            <v-col :key="3" cols="2" align="right">
              <v-btn class="btn org-bkg" width="100%" @click="SaveChanges">
                Save changes</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-main>
  </div>
  <div
    id="alert"
    style="
      position: absolute;
      align-self: center;
      display: none;
      top: 95%;
      left: 50%;
      transform: translate(-50%, -50%);
    "
  >
    <v-alert density="default" :type="alertType" closable>
      {{ alertMessage }}
    </v-alert>
  </div>
</template>

<script>
import { ref, computed, reactive } from "vue";
import LoginAPI from "@/api/resources/Login.js";
import OwnerAPI from "@/api/resources/Owner.js";

export default {
  name: "EditProfileView",
  created() {
    this.populateUserData();
  },
  setup(props) {
    let currentOwnerId = ref();
    let pictures = ref();
    let showPass = ref(false);
    let showPassConf = ref(false);
    let alertType = ref("warning");
    let alertMessage = ref("");
    let passwordConfirmation = ref("");
    let userMainData = reactive({
      emailAdress: "",
      passwordHash: "",
    });
    let userDetails = reactive({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      ownerTypeId: 2,
    });
    let SaveChanges = async () => {
      if (validateInput()) {
        try {
          if(userMainData.passwordHash.length > 0)
          {
            let login = await LoginAPI.update(userMainData, currentOwnerId.value);
          }
          let owner = await OwnerAPI.update(userDetails, currentOwnerId.value);
           displayAlert("Your changes have been saved successfully!",
          "success");
        } catch (error) {
          console.log(error, "try again");
          displayAlert("Your changes couldn't be saved . Please try again later.",
          "error");
        }
      }
    };
    let displayAlert = (message, type) => {
      alertType.value = type;
      alertMessage.value = message;
      document.getElementById("alert").style.display = "block";
      setTimeout(function () {
        document.getElementById("alert").style.display = "none";
      }, 5000);
    };
    let validateInput = () => {
      if (userMainData.passwordHash != passwordConfirmation.value) {
        displayAlert("The passwords don't match. Please rewrite.", "error");
        return false;
      }
      return true;
    };
    let parseDetails = (details) => {
      userDetails.firstName = details.firstName;
      userDetails.lastName = details.lastName;
      userDetails.phoneNumber = details.phoneNumber;
      userDetails.ownerTypeId = details.ownerTypeId;
    };
    let populateUserData = async () => {
      currentOwnerId.value = 1; //SCHIMBA cu ce ownerID ai tu
      let details = await OwnerAPI.getOwner(currentOwnerId.value);
      parseDetails(details);
      let mainDetails = await LoginAPI.getLogin(currentOwnerId.value);
      userMainData.emailAdress = mainDetails.emailAdress;
    };
    return {
      pictures,
      showPass,
      showPassConf,
      passwordConfirmation,
      SaveChanges,
      userMainData,
      userDetails,
      populateUserData,
      currentOwnerId,
      parseDetails,
      alertType,
      alertMessage,
      validateInput,
      displayAlert,
    };
  },
};
</script>

<style scoped>
.container-custom {
  background-color: rgb(229, 229, 229);
}

.divider-custom {
  background-color: rgb(252, 143, 1);
}

img {
  border-radius: 180px;
  width: 8em;
}

label {
  font-weight: bold;
  color: rgb(172, 187, 186);
  font-size: 1em;
}

.logout-btn {
  background-color: rgb(199, 62, 62);
  color: white;
  text-transform: none;
}

.org-bkg {
  background-color: rgb(252, 143, 1);
  color: white;
  text-transform: none;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 599px) {
  label {
    font-size: 0.7em;
  }
  img {
    width: 3em;
  }
  .btn {
    font-size: 0.6em;
    display: block;
    height: 25px;
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.7em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.65em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.7em;
  }
  ::v-deep(.v-field--variant-filled) {
    --v-input-control-height: 40px;
    --v-field-padding-bottom: 6px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  label {
    font-size: 0.8em;
  }
  img {
    width: 4em;
  }
  .btn {
    font-size: 0.7em;
    height: 30px;
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.8em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.8em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.8em;
  }
  ::v-deep(.v-field--variant-filled) {
    --v-input-control-height: 45px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  label {
    font-size: 0.9em;
  }
  img {
    width: 6em;
  }
  .btn {
    font-size: 0.9em;
    height: 35px;
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.9em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.9em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.9em;
  }
  ::v-deep(.v-field--variant-filled) {
    --v-input-control-height: 50px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  label {
    font-size: 1em;
  }
  img {
    width: 8em;
  }
  .btn {
    font-size: 1em;
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 1em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 1em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 1em;
  }
  ::v-deep(.v-field--variant-filled) {
    --v-input-control-height: 55px;
  }
}
</style>
