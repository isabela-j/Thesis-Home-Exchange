<template>
  <v-main>
    <div class="container-custom">
      <v-label> Add your offer here: </v-label>
    </div>
    <v-container class="container-custom" fluid>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Title and description</label>
              <div style="margin: 0.4em">
                <v-text-field
                  label="insert title"
                  hide-details="auto"
                  variant="underlined"
                />
                <v-textarea
                  id="suggestMessage"
                  label="Description"
                  hide-details="auto"
                  v-model="defaultText"
                  class="v-textarea"
                ></v-textarea>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Type</label>
              <div style="margin: 0.4em">
                <v-btn class="btn btnNormal"> House</v-btn>
                <v-btn class="btn btnNormal"> Appartment</v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Street</label>
              <div style="margin: 0.4em">
                <v-btn class="btn btnNormal"> Dropdown aici</v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Bedrooms</label>
              <div style="margin: 0.4em">
                <v-text-field
                  label="insert number of bedrooms"
                  hide-details="auto"
                  variant="underlined"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Bathrooms</label>
              <div style="margin: 0.4em">
                <v-text-field
                  label="insert number of bathrooms"
                  hide-details="auto"
                  variant="underlined"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Partition</label>
              <div style="margin: 0.4em">
                <v-btn class="btn btnNormal"> detached </v-btn>
                <v-btn class="btn btnNormal"> semi-detached </v-btn>
                <v-btn class="btn btnNormal"> uncompartmented</v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Floor</label>
              <div style="margin: 0.4em">
                <v-text-field
                  label="insert number of floor"
                  hide-details="auto"
                  variant="underlined"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Parking lots</label>
              <div style="margin: 0.4em">
                <v-text-field
                  label="insert number of parking lots if they exist"
                  hide-details="auto"
                  variant="underlined"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Sqft</label>
              <div style="margin: 0.4em">
                <v-text-field
                  label="insert the sqft"
                  hide-details="auto"
                  variant="underlined"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Balcony</label>
              <div style="margin: 0.4em">
                <v-text-field
                  label="insert number of balconies if they exist"
                  hide-details="auto"
                  variant="underlined"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Construction year</label>
              <div style="margin: 0.4em">
                <v-text-field
                  label="insert an approximate year"
                  hide-details="auto"
                  variant="underlined"
                />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Utilities</label>
              <div style="margin: 0.4em">
                <v-checkbox label="electrical curent" hide-details>
                </v-checkbox>
                <v-checkbox label="water pipe" hide-details> </v-checkbox>
                <v-checkbox label="sewerage" hide-details> </v-checkbox>
                <v-checkbox label="gas pipe" hide-details> </v-checkbox>
                <v-checkbox label="thermal power station" hide-details>
                </v-checkbox>
                <v-checkbox label="new radiators" hide-details> </v-checkbox>
                <v-checkbox label="underfloor heating" hide-details>
                </v-checkbox>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Features</label>
              <div style="margin: 0.4em">
                <v-checkbox label="modern furniture" hide-details> </v-checkbox>
                <v-checkbox label="electric stove" hide-details> </v-checkbox>
                <v-checkbox label="washing machine" hide-details> </v-checkbox>
                <v-checkbox label="dishwasher" hide-details> </v-checkbox>
                <v-checkbox label="garage" hide-details> </v-checkbox>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Pics</label>
              <div style="margin: 0.4em">
                <v-file-input multiple />
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
            <div style="display: flex; flex-direction: column">
              <label>Contact details</label>
              <div style="margin: 0.4em">
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
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <div class="right">
            <v-btn class="btn-next">Next</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AddOfferView",
  setup() {
    let defaultText = ref(
      "Please write here a short description about the house/apartment you want to exchange. In this way we will cover some features we may didn't included and will help the potential buyer to make a better idea about your announce :)"
    );
    return {
      defaultText,
    };
  },
};
</script>

<style scoped>
.container-custom {
  background-color: rgb(229, 229, 229);
}

.right { 
  float:right;
}

::v-deep(.v-text-field .v-field__input) {
  color: rgb(1, 83, 81);
}
::v-deep(.v-text-field .v-field__outline) {
  color: rgb(0, 0, 0);
}
::v-deep(.v-textarea .v-field__input) {
  color: rgb(1, 83, 81);
}

::v-deep(.v-textarea .v-field__field) {
  background-color: white;
}
label {
  color: rgb(252, 158, 1);
  margin: 0.2em;
  margin-left: 0.6em;
}
.btn {
  border-radius: 50px;
  border: 2.5px solid rgb(1, 83, 81);
  text-transform: none;
  margin: 0.2em;
}
.btn-next {
  background-color: rgb(252, 143, 1);
  text-transform: none;
  color:white;
  font-size: 15px;
}

.btnNormal {
  color: rgb(1, 83, 81);
  font-weight: bold;
}
.btnClicked {
  background-color: rgb(1, 83, 81);
  color: white;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 500px) {
 div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
    height: 35px;
  }
  .btn-next {
    font-size: 12px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
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
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
    height: 35px;
  }
   .btn-next {
    font-size: 12px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
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

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  div {
    font-size: 12px;
  }
  .btn {
    font-size: 12px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
    height: 35px;
  }
   .btn-next {
    font-size: 14px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
    border: 1.7px solid rgb(1, 83, 81);
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
  div {
    font-size: 14px;
  }
  .btn {
    font-size: 14px;
    border-radius: 50px;
    border: 2.5px solid rgb(1, 83, 81);
  }
   .btn-next {
    font-size: 15px;
    height: 35px;
  }
  .btnFav {
    height: 35px;
    border-radius: 40px;
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
