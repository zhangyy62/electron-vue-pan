<template>
    <div class="panContent">
        <sideBar></sideBar>
        <mainContent></mainContent>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import sideBar from '../sideBar/sideBar.vue'
import mainContent from '../mainContent/mainContent.vue'

export default Vue.extend({
    name: 'panContent',
    components: { 
        sideBar, 
        mainContent 
    }
});
</script>

<style lang="scss">
  @import './panContent.scss'
</style>
