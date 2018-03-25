<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./styles/_custom_bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
