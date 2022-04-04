<template>
    <v-list-item dense>
      <v-list-item-content>
        <v-list-item-title dense>Filters</v-list-item-title>
      </v-list-item-content>
      <v-spacer></v-spacer>
      <v-list-item-content class="alignEnd" dense>
        <v-btn class="btnReset">Reset all</v-btn>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-container class="pa-0" dense>
      <v-expansion-panels multiple>
        <v-expansion-panel>
          <v-expansion-panel-title>Location</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-btn dense class="btn">dropbox aici</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Type</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-btn class="btn">House</v-btn>
            <v-btn class="btn">Apartment</v-btn>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel expand v-for="(item, i) in mainDetails" :key="i">
          <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
          <v-expansion-panel-text>
            <div class="justif">
              <v-btn v-for="(subitem, j) in item.text" :key="j" class="btn">{{
                subitem
              }}</v-btn>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-title>Price</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container fluid>
              <v-row dense>
                <v-col :key="1">
                  <v-text-field label="min price" hide-details="auto">
                    <font-awesome-icon
                      icon="euro-sign"
                      color="rgb(252,158,1)"
                    />
                  </v-text-field>
                </v-col>
                <v-col :key="2">
                  <v-text-field label="max price" hide-details="auto">
                    <font-awesome-icon
                      icon="euro-sign"
                      color="rgb(252,158,1)"
                    />
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Sqft</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container fluid>
              <v-row dense>
                <v-col :key="1">
                  <v-text-field label="min sqft" hide-details="auto" />
                </v-col>
                <v-col :key="2">
                  <v-text-field label="max sqft" hide-details="auto" />
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Construction year</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container fluid>
              <v-row dense>
                <v-col :key="1">
                  <v-text-field label="min year" hide-details="auto" />
                </v-col>
                <v-col :key="2">
                  <v-text-field label="max year" hide-details="auto" />
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Floor</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-select :items="floors" label="floor number" multiple></v-select>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Balcony</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-container fluid>
              <v-row dense>
                <v-col :key="1">
                  <v-text-field label="min number" hide-details="auto" />
                </v-col>
                <v-col :key="2">
                  <v-text-field label="max number" hide-details="auto" />
                </v-col>
              </v-row>
            </v-container>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Utilities</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-checkbox v-for="utility in utilities" :key="utility"
              color="rgb(252,158,1)"
              hide-details
              :label="utility"
            />
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>Features</v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-checkbox v-for="feature in features" :key="feature"
              color="rgb(252,158,1)"
              hide-details
              :label="feature"
            />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
</template>

<script>
import { ref } from "vue";

export default {
    
    name: "Filters",
    setup() {
         let mainDetails = ref([
      {
        text: ["1 room", "2 rooms", "3 rooms", "4 rooms", "4+"],
        title: "Bedrooms",
      },
      {
        text: ["1 bath", "2 baths", "3 baths", "3+"],
        title: "Bathrooms",
      },
      {
        text: ["1", "2", "3", "3+"],
        title: "Parking lots",
      },
      {
        text: ["detached", "semi-detached", "uncompartmented"],
        title: "Partition",
      },
    ]);
    let floors = ref([
      "semi-basement",
      "ground floor",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "6+",
      "mansard",
    ]);
    let features = ref(["modern furniture", "electric stove", "washing machine", "dishwasher", "garage"]);
    let utilities = ref(["electrical curent","water pipe","sewerage","gas pipe","thermal power station","new radiators"]);
    let panel = ref([0, 1]);
      return {
      mainDetails,
      floors,
      features,
      utilities,
      panel,
      }  
    },
}
</script>

<style scoped>
.btnReset {
  border-color: none;
  text-transform: none;
  color: rgb(1, 83, 81);
  border: 0 !important;
  box-shadow: none !important;
  outline: none !important;
}
.btnReset:hover {
  text-decoration: underline;
}
.alignEnd {
  display: inline-flex;
}
.btn {
  border-radius: 50px;
  border: 2.5px solid rgb(252,158,1);
  color:rgb(252,158,1); 
  text-transform: none;
  margin: 3px;
}
.justif {
  justify-content: space-evenly;
}
</style>
