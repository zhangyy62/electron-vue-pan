<template>
    <div id="floatingWindow">
        <div class="logo"></div>
        <div class="content">
            <div class="text">拖拽上传</div>
        </div>
    </div>
</template>

<script>
const drag = require('electron-drag');

export default {
    name: "floatingWindow",
    mounted() {
        drag('#floatingWindow');

        if(!drag.supported) {
            document.querySelector('#floatingWindow').style['-webkit-app-region'] = 'drag';
        }
    }
}
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    .text {
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        text-align: center;
        color: #74A1FA;
    }

    .logo {
        width: 40px;
        background: #5B9BFE url('/static/imgs/logo@2x.png') no-repeat 2px 3px;
        background-size: 80%;
    }

    .content {
        background-color: #EEF4FE;
        width: 100px;
    }

    #floatingWindow {
        -webkit-user-select: none;
        cursor: pointer;
        overflow: hidden;
    }

    #floatingWindow {
        cursor: pointer !important;
        height: 25px;
        width: 140px;
        border-radius: 4px;
        display: flex;
        border: 1px solid #3388FE;
    }
</style>
