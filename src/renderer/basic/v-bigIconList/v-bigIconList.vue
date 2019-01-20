<template>
    <div>
        <dd v-for="rowDatas in bigIconDatas" class="">
            <div v-for="file in rowDatas" class="container">
                <div class="img-container dir-img"><img src=""></img></div>
                <div><i>{{file.name}}</i></div>
            </div>
        </dd>
    </div>
</template>

<script>
export default {
    name: 'v-bigIconList',
    props: {
        bigIconDatas: Array
    }
};
</script>

<style lang="scss">
    dd {
        height: 135px;
        display: block;

        .container {
            width: 120px;
            height: 127px;
            float: left;
            margin: 4px 0 0 6px;
            text-align: center;
            position: relative;
        }

        .img-container {
            position: relative;
            margin: 9px auto 0;
            width: 84px;
            height: 84px;
            background-repeat: no-repeat;
            overflow: hidden;
        }
    }
    .dir-img {
        background: url('/static/imgs/Folder.png') center no-repeat;
    }
</style>
