<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'pan'
});
</script>

<style lang="scss">
  /* CSS */
  body {
    height: 100vh;
    min-width: 960px;
    min-height: 650px;
    font-size: 12px;
  }

  #app {
    height: 100%;
  }

  .clearfix:after {
    content: ''; 
    display:block; 
    clear:both;
  }
</style>
