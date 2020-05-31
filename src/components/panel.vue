<template>
  <div id="panel">
    <left-bar />
    <detail />
    <workplace />
  </div>
</template>

<script>
import leftBar from "./panel/leftBar";
import detail from "./panel/detail";
import workplace from "./panel/workplace";
export default {
  name: "panel",
  components: {
    leftBar,
    workplace,
    detail
  }
};
</script>

<style scoped>
#panel {
  display: flex;
  flex-direction: row;
  height: calc(100% - 50px);
}
</style>