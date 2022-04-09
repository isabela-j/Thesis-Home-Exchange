<template>
  <v-main class="background">
    <v-container class="container-custom ma-2" fluid>
      <v-row dense>
        <v-col key="1">
          <PicturesSlideShow />
        </v-col>
        <v-row class="fill-height" dense>
          <v-col key="11" >
            <ProfileDetails
              title="Marasti Street nr 3"
              type="1"
              details="5 bed - 2 baths - 2 parking lot - 130 sqft"
              description="Lorem Ipsum is simply dummy text of
                           the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum."
              price="130 000"
              offerSaved="false"
            />
          </v-col>
          <v-col key="12" class="show-right">
            <OwnerSmallDetails
              name="Viorel Barbos"
              ownerType="0"
              brokerageName=""
              phoneNo="0745628364"
              email="virelbar@gmail.com"
            />
            <SuggestOffer
            offerRequested="true" />
          </v-col>
        </v-row>
         <v-row class="show-bottom" dense>
           <v-col>
            <OwnerSmallDetails
              name="Viorel Barbos"
              ownerType="0"
              brokerageName=""
              phoneNo="0745628364"
              email="virelbar@gmail.com"
              class="ma-2"
            />
            <SuggestOffer />
           </v-col>
          </v-row>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ProfileDetails from "@/components/ProfileDetails.vue";
import OwnerSmallDetails from "@/components/OwnerSmallDetails.vue";
import PicturesSlideShow from "@/components/PicturesSlideShow.vue";
import SuggestOffer from "@/components/SuggestOffer.vue";
export default {
  name: "AnnounceView",
  components: {
    ProfileDetails,
    OwnerSmallDetails,
    PicturesSlideShow,
    SuggestOffer,
  },
  setup() {},
};
</script>

<style scoped>
.container-custom {
  background-color: rgb(229, 229, 229);
}

.background {
  background-color: rgb(229, 229, 229);
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.show-right {
  display: initial;
}

.show-bottom {
  display: none;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 300px) {
  .show-right {
    display: none;
  }
  .show-bottom {
    display: initial;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .show-right {
    display: none;
  }
  .show-bottom {
    display: initial;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .show-right {
    display: initial;
  }
  .show-bottom {
    display: none;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .show-right {
    display: initial;
  }
  .show-bottom {
    display: none;
  }
}
</style>
