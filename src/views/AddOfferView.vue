<template>
  <v-main>
    <v-card>
      <v-label> Add your offer here: </v-label>
    </v-card>
    <v-container class="container-custom" fluid>
      <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Type</label>
              <div style="margin: 0.4em;">
                <v-btn class="btn btnNormal">
                  House</v-btn
                > 
                <v-btn class="btn btnNormal">
                  Appartment</v-btn
                > 
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Street</label>
              <div style="margin: 0.4em;">
                <v-btn class="btn btnNormal">
                  Dropdown aici</v-btn
                > 
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
       <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Bedrooms</label>
              <div style="margin: 0.4em;">
                <v-text-field label="insert number of bedrooms" hide-details="auto" variant="underlined"/>
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
       <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Bathrooms</label>
              <div style="margin: 0.4em;">
                <v-text-field label="insert number of bathrooms" hide-details="auto" variant="underlined"/>
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
       <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Partition</label>
              <div style="margin: 0.4em;">
                <v-btn class="btn btnNormal">
                  detached </v-btn
                > 
                <v-btn class="btn btnNormal">
                  semi-detached </v-btn
                > 
                <v-btn class="btn btnNormal">
                  not cv</v-btn
                >
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Floor</label>
              <div style="margin: 0.4em;">
                <v-text-field label="insert number of floor" hide-details="auto" variant="underlined"/>
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
           <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Parking lots</label>
              <div style="margin: 0.4em;">
                <v-text-field label="insert number of parking lots if they exist" hide-details="auto" variant="underlined"/>
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
       <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Sqft</label>
              <div style="margin: 0.4em;">
                <v-text-field label="insert the sqft" hide-details="auto" variant="underlined"/>
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
       <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Balcony</label>
              <div style="margin: 0.4em;">
                <v-text-field label="insert number of balconies if they exist" hide-details="auto" variant="underlined"/>
            </div>
          </div>
          </v-card>
        </v-col>
      </v-row>
       <v-row dense>
        <v-col key="1">
          <v-card>
           <div style="display:flex; flex-direction: column;">
                <label>Construction year</label>
              <div style="margin: 0.4em;">
                <v-text-field label="insert an approximate year" hide-details="auto" variant="underlined"/>
            </div>
          </div>
          </v-card>
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
  },
};
</script>

<style scoped>
.container-custom {
  background-color: rgb(229, 229, 229);
}

::v-deep( .v-text-field .v-field__input) {
    color: rgb(1, 83, 81);
}
::v-deep( .v-text-field .v-field__outline) {
    color: rgb(0, 0, 0);
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
.btnNormal {
  color: rgb(1, 83, 81);
  font-weight: bold;
}
.btnClicked {
  background-color: rgb(1, 83, 81);
  color: white;
}
</style>
