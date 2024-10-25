<template>
  <div id="app">
    <Header></Header>
    <List></List>
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
import List from "../../components/list/List.vue";

export default {
  name: "App",
  provide() {
    return {
      records: this.records,
    };
  },
  components: {
    Header,
    List,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
