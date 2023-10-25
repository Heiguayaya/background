<template>
  <div class="imgs-container">
    <header class="header-content">不知道的头部信息</header>
    <div class="imgs-content">
      <div class="div-box" v-for="(item, index) in data" :key="index">
        <ul class="ul-box">
          <li
            class="li-box"
            v-for="(li, i) in item.details.slice(0, 8)"
            :key="i"
          >
            <img :src="li.path" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.getImgs();
  },
  methods: {
    async getImgs() {
      // let res = await axios({
      //   method: "GET",
      //   url: "/api/img",
      // });
      let res = await axios.get("/api/img", {
        params: {
          size: 18,
        },
      });
      console.log(res.data);
      this.data = res.data;
    },
  },
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.header-content {
  text-align: center;
}
.imgs-content {
  width: 80%;
  margin: 16px auto 0px;
  min-height: 400px;
  .div-box {
    padding: 10px;
    margin-bottom: 16px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    .ul-box {
      display: flex;
      justify-content: space-between;
      .li-box {
      }
      .li-box img {
        height: 128px;
        width: 128px;
        display: block;
      }
    }
  }
}
</style>
