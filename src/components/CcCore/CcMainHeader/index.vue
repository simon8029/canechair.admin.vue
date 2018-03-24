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
    <div class="navbar-menu">
      <div class="navbar-menu">
        <div class="navbar-start">
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="badge is-badge-danger is-badge-small" data-badge="1">
                <icon class="icon" name="bell"></icon>
              </span>
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="">
                <icon class="icon" name="exclamation-circle"></icon> &nbsp Notification
              </a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <img :src="this.$store.state.user.picture" class="rounded-circle" alt="User Image">
              <!-- User name-->
              <p class="user_name_max">{{this.$store.state.user.name}}</p>
            </a>
            <div class="navbar-dropdown is-boxed is-right">
              <a class="navbar-item" href="">
                <icon class="icon" name="user"></icon> &nbsp Profile
              </a>
              <a class="navbar-item" href="">
                <icon class="icon" name="cog"></icon> &nbsp Settings
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="">
                <icon class="icon" name="sign-out"></icon> &nbsp SignOut
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  import screenfull from "screenfull";

  export default {
    name: "CcMainHeader",
    components: {
    },
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