<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
            <img src="@assets/img/canechair-logo.png" alt="canechair-logo" width="112" height="28">
            </router-link>

            <div class="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>
    </nav>
</template>
<script>
import screenfull from "screenfull";
export default {
  name: "CcMainHeader",

  methods: {
    toggle_menu() {
      this.$store.commit("left_menu", "toggle");
    },
    fullscreen() {
      if (screenfull.enabled) {
        screenfull.toggle();
      }
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
