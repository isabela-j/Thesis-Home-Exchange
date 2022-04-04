<template>
  <v-card class="ma-2" >
    <v-container fluid>
      <v-row dense>
        <v-col key="1" cols="5">
          <v-row dense>
            <v-label class="name-decoration">{{ name.toUpperCase() }}</v-label>
          </v-row>
          <v-row dense>
            <v-label>{{ ownerTypeString }}</v-label>
          </v-row>
          <v-row dense>
            <v-label>{{ hasBrokerageName }}</v-label>
          </v-row>
        </v-col>

        <v-divider
          class="vertical-divider mx-4"
          vertical
          style="display: inline"
        ></v-divider>

        <v-col key="2" cols="5">
          <v-row dense>
            <v-label class="call-decoration">Call or email at...</v-label>
          </v-row>
          <v-row dense>
            <v-label class="contact-decoration">{{ phoneNo }}</v-label>
          </v-row>
          <v-row dense>
            <v-label class="contact-decoration">{{ email }}</v-label>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { computed } from "vue";
export default {
  name: "OwnerSmallDetails",
  setup(props) {
    const ownerTypeString = computed(() => {
      return props.ownerType > 0 ? "Broker" : "Individual";
    });
    const hasBrokerageName = computed(() => {
      return props.brokerageName.length > 0
        ? props.brokerageName
        : "No brokerage";
    });
    return {
      ownerTypeString,
      hasBrokerageName,
    };
  },
  props: ["name", "ownerType", "brokerageName", "phoneNo", "email"],
};
</script>

<style scoped>
.vertical-divider {
  background-color: rgb(0, 80, 78);
}

.name-decoration {
  color: rgb(252, 158, 1);
  font-size: 16px;
}

.call-decoration {
  color: rgb(0, 80, 78);
  font-size: 16px;
}

.contact-decoration {
    color: black;
}
</style>
