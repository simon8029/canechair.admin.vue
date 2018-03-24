<template>
  <div>
    <ccPreloader v-if="this.$store.state.CcPreloader"></ccPreloader>
    <CcMainHeader></CcMainHeader>
    <ccLeftSideBar></ccLeftSideBar>
    <ccMain>
        <router-view></router-view>
    </ccMain>
  </div>
</template>

<script>
import CcPreloader from "@components/CcCore/CcPreloader";
import CcMain from "@CcCore/CcMain";
import CcMainHeader from "@components/CcCore/CcMainHeader";
import CcLeftSideBar from "@CcCore/CcLeftSideBar";
export default {
  name: "layout",
  components: {
    CcPreloader,
    CcMain,
    CcMainHeader,
    CcLeftSideBar
  }
};
</script>

<style>

</style>
