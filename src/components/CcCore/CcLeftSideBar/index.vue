<template>
    <div class="leftSideBar">
      <div v-for="item in sideBarItems" :key="item.name">
        <li >
          <span>{{item.name}}</span>
        </li>
      </div>
    </div>
</template>

<script>
import sideBarItems from "./SideBarItems.js";
export default {
  name: "CcLeftSideBar",
  data() {
    return {
      sideBarItems: sideBarItems
    };
  }
};
</script>

<style lang="scss">
@import "../../../styles/_variables.scss";
.leftSideBar {
  width: $LeftSideBarWidth;
}
</style>