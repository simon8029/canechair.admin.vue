import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import 'bootstrap';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

Vue.component('icon', Icon);
