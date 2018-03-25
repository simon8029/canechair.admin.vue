<template>
  <div class="leftSideBar" :class="leftSideBarOpen?'leftSideBarOpen':'leftSideBarClose'">
    <!-- <div class="logoBlock">
      <img src="@assets/img/canechair-logo.png" style="width:200px" />
      <span class="leftSideBarCloseBtn" @click="closeLeftSideBar">
        <i class="fas fa-arrow-alt-circle-left"></i>
      </span>
    </div> -->
    <div id="accordion">
      <div class="card">
        <div v-for="item in leftSideBarItems" :key="item.name">
          <div class="card-header" :id="`heading-${item.name}`">
              <router-link to='/' class="btn btn-link collapsed" data-toggle="collapse" :data-target="`#${item.name}`" aria-expanded="false" :aria-controls="item.name">
                {{item.name}}
              </router-link>
          </div>
            <div v-if="item.subItems &&item.subItems.length>0" :id="item.name" class="collapse" aria-labelledby="`heading-${item.name}`" data-parent="#accordion">
              <div class="card-body">
                <div v-for="subItem in item.subItems" :key="subItem.name">
                  <router-link to='/'>{{subItem.name}}</router-link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import leftSideBarItems from "./leftSideBarItems.js";

  export default {
    name: "CcLeftSideBar",
    data() {
      return {
        leftSideBarItems: leftSideBarItems
      };
    },
    methods: {
      ...mapActions([
        "closeLeftSideBar"
      ])
    },
    computed: {
      ...mapGetters([
        "leftSideBarOpen"
      ])
    }
  };
</script>

<style lang="scss" scoped>
@import "../../../styles/_variables.scss";

  .leftSideBar {
    margin-top: 20px;
  }

  .logoBlock {
    margin-bottom: 20px;
  }

  .leftSideBarCloseBtn {
    margin-left: 10px
  }

  .leftSideBarOpen {
    margin-left: 0;
  }

  .leftSideBarClose {
    margin-left: -$leftSideBar-width;
  }

  // /* The side navigation menu */

  .leftSideBar {
    transition: margin-left .5s;
    margin-top: $header-height;
    height: $leftSideBar-height;
    width: $leftSideBar-width;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: $theme-color;
    overflow-x: hidden;
    transition: 0.5s;
  }

  .leftSideBar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    // font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .leftSideBar a:hover {
    color: $theme-color;
  }
</style>