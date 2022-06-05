<template>
  <div class="center-content">
  <carousel 
    :items-to-show="4.95"
    wrapAround
    :settings="settings"
    :breakpoints="breakpoints"
    class="ma-2"
    width= "100%"
  >
    <slide v-for="(item, index) in items" :key="index">
      <v-img :src="item" class="carousel__item" />
    </slide>
    <template #addons="{ slidesCount, currentSlide }" @onChange="changed()">
      <navigation v-if="slidesCount > 3"/>
      <pagination v-if="slidesCount > 3"/>
    </template>
  </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref,watch, reactive } from "vue";
export default {
  name: "PicturesSlideShow",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup(props) {
    let changed =() =>  {
      console.log("changed");
    }
    let items = reactive(props.pictures);
    return {
      items,
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3.25,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 4.65,
          snapAlign: "center",
        },
        settings: {
          itemsToShow: 1,
          snapAlign: "center",
        },
      },
      changed,
    };
  },
  props: ["pictures"]

};
</script>

<style scoped>
.color-green {
  color: rgb(1, 83, 81) !important;
  background-color: rgb(1, 83, 81) !important;
}

.carousel {
  width: 90%;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.8) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

.carousel__item {
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.5px solid transparent;
}

.carousel__slide {
  padding: 3px;
}

div {
  --vc-pgn-active-color: rgb(252, 158, 22);
  --vc-pgn-background-color: rgb(243, 196, 135);
  --vc-clr-primary: rgb(252, 158, 22);
  --vc-clr-secondary: rgb(252, 158, 22);
  --vc-nav-background-color: rgb(252, 158, 22);
}

.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
