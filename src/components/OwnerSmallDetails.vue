<template>
  <v-card>
    <v-container fluid>
      <v-row dense>
        <v-col key="1" cols="5">
          <v-row dense>
            <v-label class="name-decoration">{{ name.toUpperCase() }}</v-label>
          </v-row>
          <v-row dense>
            <v-label class="person-decoration">{{ ownerTypeString }}</v-label>
          </v-row>
          <v-row dense>
            <v-label class="person-decoration">{{ hasBrokerageName }}</v-label>
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
  font-size:16px;
}
.person-decoration {
  font-size:16px;
}
@media only screen and (min-width: 300px) {
  .name-decoration, .call-decoration, .contact-decoration, .person-decoration {
    font-size: 12px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .name-decoration, .call-decoration, .contact-decoration, .person-decoration {
    font-size: 13px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .name-decoration, .call-decoration, .contact-decoration, .person-decoration {
    font-size: 14px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .name-decoration, .call-decoration, .contact-decoration, .person-decoration {
    font-size: 16px;
  }
}
</style>
