<template>
  <div class="leftSideBar" :class="leftSideBarOpen?'leftSideBarOpen':'leftSideBarClose'">
    <div class="logoBlock">
      <img src="@assets/img/canechair-logo.png" style="width:200px"/>
      <span class="leftSideBarCloseBtn" @click="closeLeftSideBar"><i class="fas fa-arrow-alt-circle-left"></i></span>
    </div>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>

</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import sideBarItems from "./SideBarItems.js";

  export default {
    name: "CcLeftSideBar",
    data() {
      return {
        sideBarItems: sideBarItems
      };
    },
    methods:{
      ...mapActions([
        "closeLeftSideBar"
      ])
    },
    computed:{
      ...mapGetters([
        "leftSideBarOpen"
      ])
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../styles/_variables.scss";

.leftSideBar{
  margin-top: 20px;
}

.logoBlock{
  margin-bottom: 20px;
}

.leftSideBarCloseBtn{
  margin-left: 10px
}

.leftSideBarOpen{
  margin-left: 0;
}

.leftSideBarClose{
  margin-left: -$LeftSideBarWidth;
}

/* The side navigation menu */
.leftSideBar {
  transition: margin-left .5s;
  height: 100%; /* 100% Full-height */
  width: $LeftSideBarWidth; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: $ThemeColor; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in the leftSideBar */
}

/* The navigation menu links */
.leftSideBar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.leftSideBar a:hover {
    color: #f1f1f1;
}
</style>