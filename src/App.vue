<template>
  <div id="app">
    <topBar />
    <panel />
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>-->
    <!-- <router-view /> -->
  </div>
</template>
<script>
import "./assets/css/base.css";
import topBar from "./components/topBar";
import panel from "./components/panel";
export default {
  name: "App",
  components: {
    topBar,
    panel
  }
};
</script>
<style>
#app {
  height: 100%;
}

#nav {
}

#nav a {
}

#nav a.router-link-exact-active {
}
</style>
