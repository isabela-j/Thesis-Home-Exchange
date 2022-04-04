<template>
  <v-main class="background">
    <v-container class="container-custom ma-2" fluid>
      <v-row dense>
        <v-col key="1">
          <PicturesSlideShow />
        </v-col>
        <v-row dense>
          <v-col key="11">
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
              offerRequested="true"
              offerSaved="false"
              
            />
          </v-col>
          <v-col key="12">
            <OwnerSmallDetails
              name="Viorel Barbos"
              ownerType="0"
              brokerageName=""
              phoneNo="0745628364"
              email="virelbar@gmail.com"
            />
            <SuggestOffer/>
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
    SuggestOffer
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
</style>
