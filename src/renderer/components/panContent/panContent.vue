<template>
    <div class="panContent">
        <sideBar></sideBar>
        <mainContent></mainContent>
    </div>
</template>

<script>
import sideBar from '../sideBar/sideBar'
import mainContent from '../mainContent/mainContent'

export default {
    name: 'panContent',
     components: { 
        sideBar, 
        mainContent 
    },
}
</script>

<style lang="scss">
  @import './panContent.scss'
</style>
