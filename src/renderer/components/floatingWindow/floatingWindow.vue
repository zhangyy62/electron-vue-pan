<template>
  <div id="floatingWindow" v-on:dblclick="clickFLWIN">
    <div class="logo"></div>
    <div class="content" >
      <div class="text" >拖拽上传</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'floatingWindow',
    mounted() {
        const win = this.$electron.remote.getCurrentWindow();
        let biasX = 0;
        let biasY = 0;
        function moveEvent(e) {
            win.setPosition(e.screenX - biasX, e.screenY - biasY);
        }
        const that = this;
        document.addEventListener('mousedown', (e) => {
            switch (e.button) {
            case 0:
                biasX = e.x;
                biasY = e.y;
                document.addEventListener('mousemove', moveEvent);
                break;
            case 2:
                that.$electron.ipcRenderer.send('createSuspensionMenu');
                break;
            default:
                break;
            }
        });
        document.addEventListener('mouseup', () => {
            biasX = 0;
            biasY = 0;
            document.removeEventListener('mousemove', moveEvent);
        });
    },
    methods: {
        clickFLWIN() {
            this.$electron.ipcRenderer.send('showMainWindow');
        }
    }
});
</script>

<style lang="scss">
    #floatingWindow {
        -webkit-user-select: none;
        cursor: pointer;
        overflow: hidden;
        cursor: pointer !important;
        height: 28px;
        width: 140px;
        border-radius: 4px;
        display: flex;
        border: 1px solid #3388fe;

        .text {
            height: 25px;
            line-height: 25px;
            font-size: 12px;
            text-align: center;
            color: #74a1fa;
        }

        .logo {
            width: 40px;
            background: #5b9bfe url("/static/imgs/logo@2x.png") no-repeat 2px 3px;
            background-size: 80%;
        }

        .content {
            background-color: #eef4fe;
            width: 100px;
        }
    }
</style>
