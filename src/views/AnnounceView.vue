<template>
  <v-main class="background">
    <v-container class="container-custom" fluid>
      <v-row dense>
        <v-col key="1">
          <PicturesSlideShow />
        </v-col>
      </v-row>
      <v-row class="fill-height" style="margin: 0.1em;" dense>
        <v-col key="11" >
          <ProfileDetails
            :title="profileDetails.title"
            :type="profileDetails.type"
            :description="profileDetails.description"
            :price="profileDetails.price"
            :offerSaved="profileDetails.saved"
            :details="profileDetails.details"
            :key="profileDetails.key"
          />
           <OwnerSmallDetails
            :name="ownerDetails.fullName"
            :ownerType="ownerDetails.type"
            :phoneNo="ownerDetails.phoneNo"
            :email="ownerDetails.email"
            style="margin-top: 1em;"
          />
        </v-col>
        <v-col key="12" class="show-right">
          <SuggestOffer
            :offerRequested="profileDetails.offerRequested"
            :name="currentOwnerData.fullName"
            :phoneNo= "currentOwnerData.phoneNo"
            :email= "currentOwnerData.email"
            :key="profileDetails.key"
            
          />
        </v-col>
      </v-row>
      <v-row class="show-bottom" dense>
        <v-col>
          <SuggestOffer 
            :offerRequested="profileDetails.offerRequested"
            :name="currentOwnerData.fullName"
            :phoneNo= "currentOwnerData.phoneNo"
            :email= "currentOwnerData.email"/>
        </v-col>
      </v-row>
      <v-row dense>
        <v-card width="100%" class="ma-2">
          <MainCharacteristics
            :type="profileDetails.typestr"
            :street="profileDetails.street"
            :bedrooms="profileDetails.beds"
            :bathrooms="profileDetails.baths"
            :partition="mainCharacteristics.partition"
            :floor="mainCharacteristics.floorNo"
            :parkingNo="profileDetails.parkingLot"
            :sqft="profileDetails.sqft"
            :balconyNo="mainCharacteristics.balconyNo"
            :construction="mainCharacteristics.constructionYear"
          />
        </v-card>
      </v-row>
      <v-row dense>
        <v-card width="100%" class="ma-2">
          <Utilities
            :electrical="uitilites.electricalCurrent"
            :waterPipe="uitilites.waterPipe"
            :sewerage="uitilites.sewerage"
            :gasPipe="uitilites.gasPipe"
            :thermalPS="uitilites.thermalPowerStationOwn"
            :key="uitilites.key"
          />
        </v-card>
      </v-row>
      <v-row dense>
        <v-card width="100%" class="ma-2">
          <Features
            :furniture="features.modernFurniture"
            :electricStove="features.electricStove"
            :washingMachine="features.washingMachine"
            :dishwasher="features.dishWasher"
            :garage="features.garage"
            :key="features.key"
          />
        </v-card>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import ProfileDetails from "@/components/ProfileDetails.vue";
import OwnerSmallDetails from "@/components/OwnerSmallDetails.vue";
import PicturesSlideShow from "@/components/PicturesSlideShow.vue";
import SuggestOffer from "@/components/SuggestOffer.vue";
import MainCharacteristics from "@/components/MainCharacteristics.vue";
import Utilities from "@/components/Utilities.vue";
import Features from "@/components/Features.vue";
import { ref, computed, reactive } from "vue";
import AnnounceMainDetailsAPI from "@/api/resources/AnnounceMainDetails.js";
import OwnerAPI from "@/api/resources/Owner.js";
import LoginAPI from "@/api/resources/Login.js";
export default {
  name: "AnnounceView",
  components: {
    ProfileDetails,
    OwnerSmallDetails,
    PicturesSlideShow,
    SuggestOffer,
    MainCharacteristics,
    Utilities,
    Features,
  },
  created() {
    this.populateAnnounce();
  },
  setup() {
    let announceId = ref();
    let currentOwnerId = ref();
    let currentOwnerData = reactive({
      firstName: "",
      lastName: "",
      fullName: "",
      phoneNo: "",
      email: "",
      ownerId: "",
      ownerType: 2,
    });
    let profileDetails = reactive({
      title: "",
      street: "",
      beds: 0,
      baths: 0,
      parkingLot: 0,
      sqft: 0,
      description: "",
      price: "",
      saved: false,
      type: 2,
      details: "",
      offerRequested: false,
      key: 0,
      typestr: "",
    });
    let ownerDetails = reactive({
      firstName: "",
      lastName: "",
      fullName: "",
      phoneNo: "",
      email: "",
      ownerId: "",
      ownerType: 2,
    });
    let mainCharacteristics = reactive({
      balconyNo: 0,
      constructionYear: 0,
      floorNo: 0,
      distribution: 10,
      type: 2,
      totalBuildingFloors: 0,
      partition: ""
    });
    let features = reactive({
      dishWasher: false,
      electricStove: false,
      garage: false,
      modernFurniture: false,
      washingMachine: false,
      key:0
    });
    let uitilites = reactive({
      electricalCurrent: false,
      gasPipe: false,
      newRadiators: false,
      sewerage: false,
      thermalPowerStationOwn: false,
      waterPipe: false,
      key:0
    });

    let parseMainDetails = (details, sentDetails) => {
      profileDetails.title = details.title;
      profileDetails.street = details.fullAddress;
      profileDetails.beds = details.bedroomsNo;
      profileDetails.baths = details.bathroomsNo;
      profileDetails.parkingLot = details.parkingLotsNo;
      profileDetails.sqft = details.squareMeters;
      profileDetails.description = details.fullDescription;
      profileDetails.price = details.price;
      profileDetails.details =
        profileDetails.beds +
        " beds - " +
        profileDetails.baths +
        " baths - " +
        profileDetails.parkingLot +
        " parking lot - " +
        profileDetails.sqft +
        " sqft";
      profileDetails.saved = false;
      details.offerSaved.forEach((saved) => {
        if (saved.ownerId == currentOwnerId.value) {
          profileDetails.saved = true;
        }
      });
      details.announceCharacteristic.forEach((characteristic) => {
        if (
          characteristic.announceMainDetailId == details.id_announceMainDetails
        ) {
          profileDetails.type = characteristic.realEstateTypeId;
          profileDetails.type === 1 ? profileDetails.typestr="House" : profileDetails.typestr="Apartment"
        }
      });
      details.offerReceived.forEach((received) => {
        if (received.id_received == details.id_announceMainDetails) {
          sentDetails.forEach((userOffers) => {
            if (received.id_sender == userOffers.id_announceMainDetails) {
              profileDetails.offerRequested = true;
            }
          });
        }
      });
      console.log(profileDetails, sentDetails);
      profileDetails.key = 1;
    };
    let parseOwnerDetails = (owner, ownerResult) => {
      ownerResult.firstName = owner.firstName;
      ownerResult.lastName = owner.lastName;
      ownerResult.fullName = owner.firstName + " " + owner.lastName;
      ownerResult.phoneNo = owner.phoneNumber;
      ownerResult.type = owner.ownerTypeId;
    };
    let parseCharacteristics = (characteristics) => {
      mainCharacteristics.balconyNo = characteristics.balconyNo;
      mainCharacteristics.constructionYear = characteristics.constructionYear;
      mainCharacteristics.floorNo = characteristics.floorNo;
      mainCharacteristics.distribution =
        characteristics.realEstateDistributionId;
      mainCharacteristics.type = characteristics.realEstateTypeId;
      mainCharacteristics.totalBuildingFloors =
        characteristics.totalBuildingFloors;
      if(mainCharacteristics.distribution == "1") {
        mainCharacteristics.partition = "detached";
      }
      else if(mainCharacteristics.distribution == "2"){
        mainCharacteristics.partition = "semi-detached";
      }
      else{
        mainCharacteristics.partition = "uncompartmented";
      }
    };
    let parsefeatures = (announceFeatures) => {
      features.dishWasher = announceFeatures.dishWasher;
      features.electricStove = announceFeatures.electricStove;
      features.garage = announceFeatures.garage;
      features.modernFurniture = announceFeatures.modernFurniture;
      features.washingMachine = announceFeatures.washingMachine;
      features.key = 1;
    };
    let parseUtilities = (announceUtilities) => {
      uitilites.electricalCurrent = announceUtilities.electricalCurrent;
      uitilites.gasPipe = announceUtilities.gasPipe;
      uitilites.newRadiators = announceUtilities.newRadiators;
      uitilites.sewerage = announceUtilities.sewerage;
      uitilites.thermalPowerStationOwn = announceUtilities.thermalPowerStationOwn;
      uitilites.waterPipe = announceUtilities.waterPipe;
      uitilites.key = 1;
    };
    let populateAnnounce = async () => {
      currentOwnerId.value = 2;
      announceId.value = 1;

    try{
      let announceMainDetails =
        await AnnounceMainDetailsAPI.getAnnounceMainDetail(announceId.value);
      let sentDetails =
        await AnnounceMainDetailsAPI.getAllAnnounceMainDetailsFromOwner(
          currentOwnerId.value
        );
      let currentUserData = await OwnerAPI.getOwner(currentOwnerId.value); //the user that is currently logged in
      parseOwnerDetails(currentUserData,currentOwnerData);
      let currentUserLogin = await LoginAPI.getLogin(currentOwnerId.value);
      currentOwnerData.email = currentUserLogin.emailAdress;

      parseMainDetails(announceMainDetails, sentDetails);
      let ownerDetailsJS = await OwnerAPI.getOwner(announceMainDetails.ownerId);

      ownerDetails.ownerId = announceMainDetails.ownerId; //the owner of the announce
      parseOwnerDetails(ownerDetailsJS,ownerDetails);
      let ownerLogin = await LoginAPI.getLogin(announceMainDetails.ownerId);
      ownerDetails.email = ownerLogin.emailAdress;

      parseCharacteristics(announceMainDetails.announceCharacteristic[0]);
      parsefeatures(announceMainDetails.announceFeature[0]);
      parseUtilities(announceMainDetails.announceUtilities[0]);
    }
    catch(error) {
      console.log(error);
    }
    };
    return {
      populateAnnounce,
      announceId,
      profileDetails,
      currentOwnerId,
      currentOwnerData,
      ownerDetails,
      mainCharacteristics,
      features,
      parsefeatures,
      parseUtilities,
      uitilites
    };
  },
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
