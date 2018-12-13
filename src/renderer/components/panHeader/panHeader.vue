<template>
    <div class="pan-header ">
        <div class ="nav-buttons">
            <input type="button" value="<"/>
            <input type="button" value=">"/>
        </div>
        <div class="function-buttons">
            <input type="button" class="upload"  value="上传"/>
            <input type="button" class="new-file"  value="新建文件夹"/>
        </div>
        <div class="function-right-buttons">
            <input type="search" class="search" placeholder="搜索"/>
            <input type="button" class="button"   value=""/>
            <input type="button"  class="button"  value=""/>
            <input type="button" class="button refresh"  value=""/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'panHeader'
}
</script>

<style lang="scss">
 @import './panHeader.scss'
</style>
