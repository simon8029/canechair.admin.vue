<template>
  <div id="app">
    <div v-if="$route.path!=='/login'" class="navigation-buttons">
      <button @click="logout" class="button is-text is-pull-left">Logout</button>
      <div class="is-pulled-right">
        <router-link to="/products" class="button">
          <i class="fa fa-user-circle"><span> Shop</span></i>
        </router-link>
        <router-link to="/cart" class="button is-primary">
          <i class="fa fa-shopping-cart"><span> {{cartQuantity}}</span></i>
        </router-link>
      </div>
    </div>
    <div class="container">
      <div class="columns">
        <div class="column is-6 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import CartList from "./components/cart/CartList";
import ProductList from "./components/product/ProductList";

export default {
  name: "App",
  computed: {
    ...mapGetters(["token", "cartQuantity"])
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      this.updateInitialState(token);
    }
  },
  methods: {
    logout() {
      console.log(`logout:`);
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/login");
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateInitialState(token) {
      this.$store.dispatch("getCartItems", token);
      this.$store.dispatch("getProductItems", token);
    }
  },
  watch: {
    token() {
      console.log(`app.vue.watch()==>token: ${this.$store.state.token}`);
      if (this.token) {
        this.updateInitialState(this.token);
      }
    }
  }
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
