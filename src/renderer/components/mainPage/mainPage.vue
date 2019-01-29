<template>
    <div class='mainPage'>
        <panHeader></panHeader>
        <panContent></panContent>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import panHeader from '../panHeader/panHeader.vue'
import panContent from '../panContent/panContent.vue'

export default Vue.extend({
    name: 'mainPage',
    components: { 
        panHeader, 
        panContent 
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
});
</script>

<style lang="scss" >
  @import './mainPage.scss'
</style>
