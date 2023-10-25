<template>
  <div>父组件传过来的：{{ msg }}</div>
</template>

<script>
export default {
  name: "count",
  data() {
    return {
      msg: "",
    };
  },
  inject: ["getname"],
  methods: {
    updata(msg) {
      this.msg = msg;
    },
  },
};
</script>

<style></style>
