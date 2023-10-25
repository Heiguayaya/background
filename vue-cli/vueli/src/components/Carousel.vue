<template>
  <div class="container">
    <div>
      <count ref="count"></count>
      <button @click="pushdata">发给子组件</button>
    </div>

    <div class="routers">
      <div><router-link to="/about">TransitionGroup</router-link></div>
      <div><router-link to="/demo">demo</router-link></div>
    </div>

    <div class="btns">
      <button @click="prew">prew</button>
      <button @click="next">netx</button>
    </div>

    <transition
      :name="`image-${direction}`"
      enter-active-class="image-enter-active"
      leave-active-class="image-leave-active"
    >
      <img class="image" :key="curIndex" :src="curImage" alt="" />
    </transition>
  </div>
</template>

<script>
import count from "./count.vue";
export default {
  data() {
    return {
      images: [
        "https://10.idqqimg.com/eth/ajNVdqHZLLAJib8odhz8Th2Z4Gat0axooYaxANJlaLEwTomre0hx8Y5yib6FxDZxsgiaYG1W2ETbrU/130?tp=webp",
        "https://10.idqqimg.com/eth/ajNVdqHZLLDqYf0PtFibF9JNOnRbAw7DicWPicmfRkQwPeK2mnZ7ZJzZFdsCwCWdcwhEqoVphXiaDHE/130?tp=webp",
        "https://thirdqq.qlogo.cn/g?b=sdk&k=LaERpMuX1ZjWTQmhrhst6Q&s=100&t=0&tp=webp",
        "https://10.idqqimg.com/eth/ajNVdqHZLLDXIjdTYsqbfkxiaibd3lYGEgfiaEwficYfK2ogZDicCxaKibVibGA2Cj2ltgOvCm1tbRs1iac/130?tp=webp",
        "https://thirdqq.qlogo.cn/g?b=sdk&k=pfIficic6WRliaLULZudVI5Tw&s=640&t=1600139160&tp=webp",
      ],
      curIndex: 0,
      direction: "next",
      name: "Parent",
    };
  },
  components: {
    count,
  },
  computed: {
    curImage() {
      return this.images[this.curIndex];
    },
    maxIndex() {
      return this.images.length - 1;
    },
  },
  provide: function () {
    return {
      getname: this.name,
    };
  },
  methods: {
    pushdata() {
      this.$refs.count.updata("wolaila");
    },
    prew() {
      this.curIndex--;
      if (this.curIndex < 0) {
        this.curIndex = this.maxIndex;
      }
      this.direction = "prev";
    },
    next() {
      this.curIndex++;
      if (this.curIndex > this.maxIndex) {
        this.curIndex = 0;
      }
      this.direction = "next";
    },
  },
};
</script>

<style>
.routers {
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btns button {
  margin: 1em 0.5em;
}
.image {
  width: 200px;
  height: 200px;
  margin-left: -50px;
  position: absolute;
  border-radius: 50%;
  top: 120px;
}
.image-next-enter,
.image-prev-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.image-next-leave-to,
.image-prev-enter {
  opacity: 0;
  transform: translateX(200px);
}
.image-enter-active,
.image-leave-active {
  transition: 0.5s;
}
</style>
