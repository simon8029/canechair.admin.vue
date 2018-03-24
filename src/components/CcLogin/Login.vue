<template>
  <div id="login" class="box has-text-centered">
    <h4 class="title">LoginBox</h4>
    <button @click="login" :class="[{'is-loading':loading},'button is-primary']">Login</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginBox",
  computed: {
    ...mapGetters(["loading"])
  },
  methods: {
    login() {
      this.$store.dispatch("login").then(() => {
        this.$router.push({ path: "/products" });
      });
    }
  }
};
</script>

<style>
.box {
  padding: 30px;
}
</style>
