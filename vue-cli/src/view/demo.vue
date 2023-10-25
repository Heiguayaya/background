<template>
  <div class="demo-container">
    <Carousel />
    <shuffle />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import shuffle from "../components/shuffle.vue";
export default {
  components: {
    Carousel,
    shuffle,
  },
};
</script>

<style>
.demo-container {
  display: flex;
  justify-content: space-around;
}
</style>
