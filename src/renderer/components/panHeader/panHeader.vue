<template>
    <div class="pan-header ">
        <div> 
            <div class ="nav-buttons">
                <input type="button" value="<"/>
                <input type="button" value=">"/>
            </div>
            <div class="function-buttons">
                <input type="button" class="upload"  value="上传"/>
                <input type="button" class="new-file"  value="新建文件夹"/>
            </div>
            <div class="function-right-buttons clearfix">
                <input type="search" class="search" placeholder="搜索"/>
                <router-link to="/home/all/table"><input type="button" class="button"  value="1"/></router-link>
                <router-link to="/home/all/bar"><input type="button" class="button"  value="2"/></router-link>
                <input type="button" class="button refresh"  value=""/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'panHeader'
};
</script>

<style lang="scss">
 @import './panHeader.scss'
</style>
