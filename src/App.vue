<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";

export default {
  name: "App"
};
</script>

<style>
html,
body {
  height: 100%;
  background: #f2f6fa;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

.column--align-center {
  margin: 0 auto;
}

.navigation-buttons {
  position: absolute;
  top: 5px;
  width: 99%;
  z-index: 99;
}

.navigation-buttons .button .fa {
  padding-right: 5px;
}
</style>
