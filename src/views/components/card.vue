<template>
  <div class="main">
    <menu-router />
    <router-view />
  </div>
</template>
<script>
import menuRouter from "./menuRouter";
export default {
  components: {
    menuRouter
  }
};
</script>
<style scoped>
.main {
  margin: 0 7%;
}
</style>
