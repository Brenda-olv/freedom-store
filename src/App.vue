<template>
  <div id="app">
    <nav-bar></nav-bar>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import FooterNav from "@/common/components/FooterNav";
import NavBar from "@/common/components/NavBar";

export default {
  name: "App",
  components: { NavBar, FooterNav },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
