<template>
    <div class='mainPage'>
        <panHeader></panHeader>
        <panContent></panContent>
    </div>
</template>

<script>
import panHeader from '../panHeader/panHeader'
import panContent from '../panContent/panContent'

export default {
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
}
</script>

<style lang="scss" >
  @import './mainPage.scss'
</style>
