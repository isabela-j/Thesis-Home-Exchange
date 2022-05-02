<template>
  <v-card>
    <label class="main-label pa-3 orange-clr">Suggest an offer: </label>
    <v-container fluid>
      <v-row dense>
        <v-col key="1">
          <v-text-field
            label="your name"
            class="v-text-field"
            hide-details="auto"
          />
          <v-text-field
            label="email"
            class="v-text-field"
            hide-details="auto"
          />
          <v-text-field
            label="phone number"
            class="v-text-field"
            hide-details="auto"
          />
        </v-col>
        <v-col key="2" class="d-flex" style="flex-direction: column">
          <v-textarea
            filled
            id="suggestMessage"
            label="Message"
            hide-details="auto"
            v-model="defaultText"
            class="v-textarea"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row dense class="pa-2">
          <div class="align-to-right">
            <v-btn
              v-if="isRequested"
              class="btn btnClicked"
              @click="requestOffer"
              >Offer requested</v-btn
            >
            <v-btn v-else class="btn btnNormal" @click="requestOffer"
              >Request offer</v-btn
            >
          </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "SuggestOffer",
  setup(props) {
    let changeLabel = () => {
      var a = document.getElementsById("suggestMessage").label;
      a.label = "message";
    };
    let defaultText = ref(
      "Hello! I saw your announce with the link... and I would highly appreciate if you could give me some extra details."
    );
    let isRequested = ref(props.offerRequested);
    let requestOffer = () => {
      if(!isRequested.value)
         isRequested.value = !isRequested.value;
    };
    return {
      changeLabel,
      defaultText,
      isRequested,
      requestOffer,
    };
  },
   props: ["offerRequested"],
};
</script>

<style scoped>
.main-label {
  font-size: 17px;
}
.orange-clr {
  color: rgb(252, 158, 22);
}

.btn {
  border-radius: 50px;
  border: 2.5px solid rgb(1, 83, 81);
  text-transform: none;
}

.btnNormal {
  color: rgb(1, 83, 81);
  font-weight: bold;
}
.btnClicked {
  background-color: rgb(1, 83, 81);
  color: white;
}
.align-to-right {
  margin-left: auto;
  margin-right: 0;
}
::v-deep(.v-textarea textarea) {
  font-size: 1em;
}

::v-deep(.v-text-field label) {
  font-size: 0.8em;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 599px) {
  .main-label {
    font-size: 13px;
  }
  .btn {
    font-size: 8px;
    border-radius: 30px;
    border: 1.3px solid rgb(1, 83, 81);
    display: block;
    height: 25px;
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.7em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.5em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.7em;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .main-label {
    font-size: 14px;
  }
  .btn {
    font-size: 8px;
    border-radius: 30px;
    border: 1.3px solid rgb(1, 83, 81);
    height: 30px;
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.8em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.6em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.8em;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .main-label {
    font-size: 15px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
    height: 35px;
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 0.9em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.7em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 0.9em;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .main-label {
    font-size: 17px;
  }
  .btn {
    font-size: 14px;
    border-radius: 50px;
    border: 2.5px solid rgb(1, 83, 81);
  }
  ::v-deep(.v-textarea textarea) {
    font-size: 1em;
  }
  ::v-deep(.v-text-field label) {
    font-size: 0.8em;
  }
  ::v-deep(.v-text-field input) {
    font-size: 1em;
  }
}
</style>
