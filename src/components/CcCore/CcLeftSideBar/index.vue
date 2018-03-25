<template>

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
.sideBarItemIcon {
  margin-left: 1em;
  margin-right: 1em;
}
.sideBarItem {
  text-decoration: none;
}
</style>