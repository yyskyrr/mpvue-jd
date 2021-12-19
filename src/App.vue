<template>
  <div id="app">
    <Index/>
    <!-- <Detail/> -->
    <!-- <Confirm/> -->
  </div>
</template>

<script>
/* eslint-disable */
import Index from "./components/index.vue";
import Detail from "./components/detail.vue";
import Confirm from "./components/confirm.vue";

export default {
  name: "App",
  components: {
    Index,
    Detail,
    Confirm,
  },
};
</script>

<style>
</style>
