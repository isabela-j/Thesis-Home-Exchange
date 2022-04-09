<template>
  <div class="center-content">
  <carousel 
    :items-to-show="3.95"
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
      <pagination />
    </template>
  </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref,watch } from "vue";
export default {
  name: "PicturesSlideShow",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    let currentImgSrc = ref("https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706");
    let changed =() =>  {
      console.log("changed");
    }
    return {
      items: [
        "https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/large_jpg/AM1506.jpg?1583892706",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZoqOcp2UUh7Y2bXVpo46koYw29UamuHWiQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4O9GCySQw_9C24XfInhq-lYgfnHlRSMB5g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLSG2pHU9KTA7tHA62H0jXspw4tzlr1UYBg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenVOQ9M6IYr2sJir64rd09sb7n8w5SdXeuQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pv_uuKkN2wpGr115_ZD-bo3gpJg5dvKFBQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjoFfwaMck65QyMmJJB5EyZfmzfpq1IObPg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yUp0ykLk5JDjk2R6mt_uLywegeTeuSuMSg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8vt8ixMLrKq2pIKwr_WMLwOUIPlQdvIVKA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK3yv3oXVqvD2irGtKy8iXRoGLmDXBHbKNKw&usqp=CAU",
      ],
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5.95,
          snapAlign: "center",
        },
        settings: {
          itemsToShow: 1,
          snapAlign: "center",
        },
      },
      currentImgSrc,
      changed,
    };
  },

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
