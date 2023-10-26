<template>
  <div ref="imgContainer" class="imgs-container">
    <header class="header-content">
      <div class="header-title">
        <div class="dou">
          <img :src="douImg" alt="" />
        </div>
        <div class="title">
          <h1>逗比拯救世界</h1>
          <h2>专业的表情包搜索网站</h2>
        </div>
      </div>
      <div class="header-search">
        <input class="input-search" type="text" />
        <button class="btn-search">搜索</button>
      </div>
    </header>
    <div class="imgs-content">
      <div class="div-box" v-for="(item, index) in data" :key="index">
        <ul class="ul-box">
          <li
            class="li-box"
            v-for="(li, i) in item.details.slice(0, 8)"
            :key="i"
          >
            <img v-lazy="li.path" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getImg } from "../api/index.js";
import dou from "@/assets/dou.png";
import mainScroll from "@/mixins/mainScroll";
export default {
  mixins: [mainScroll("imgContainer")],
  data() {
    return {
      data: null,
      douImg: dou,
      sr: null,
    };
  },
  created() {
    this.getImgs();
  },

  methods: {
    async getImgs() {
      let res = await getImg(10);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  background-image: url("~@/assets/bg.jpg");
  .header-title {
    display: flex;
    justify-content: center;
    align-items: center;
    .dou img {
      width: 42px;
      height: 42px;
      border: solid 2px #333;
      display: block;
      padding: 5px;
      background: white;
      border-radius: 50%;
    }
    .title {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      h1 {
        margin: 0 5px;
        font-size: 28px;
        background: white;
        text-align: center;
        font-weight: normal;
      }
      h2 {
        margin: 0 5px 10px;
        font-size: 16px;
        background: white;
        text-align: center;
        font-weight: normal;
      }
    }
  }

  .header-search {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .input-search {
      width: 40%;
      height: 10px;
      background: #fff;
      box-shadow: 0px 0px 0px 2px transparent;
      color: #eca29b;
      -webkit-transition: box-shadow 0.3s;
      transition: box-shadow 0.3s;
      padding: 0.8em;
      border: 0.5px solid #eca29b;
      border-radius: 5px;
      font-size: 1.2em;
    }
    .input-search:focus {
      box-shadow: 0px 0px 0px 2px #eca29b;
      border: 1px solid #eca29b;
      outline: none;
    }
    .btn-search {
      height: 41px;
      width: 80px;
      background-color: #eca29b;
      border: 0.5px solid #eca29b;
      border-radius: 0 5px 5px 0;
      position: absolute;
      right: 29%;
      top: 0;
      opacity: 0.9;
    }
  }
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
