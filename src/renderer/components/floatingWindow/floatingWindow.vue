<template>
    <div id="floating-window">
        <div class="logo"></div>
        <div class="content">
            <div class="text">拖拽上传</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "floatingWindow",
    mounted() {
        let win = this.$electron.remote.getCurrentWindow();
        let biasX = 0;
        let biasY = 0;
        let that = this;
        document.addEventListener('mousedown', function (e) {
            switch (e.button) {
                case 0:
                    biasX = e.x;
                    biasY = e.y;
                    document.addEventListener('mousemove', moveEvent);
                    break;
                case 2:
                    that.$electron.ipcRenderer.send('createSuspensionMenu');
                    break;
            }
        });

        document.addEventListener('mouseup', function () {
            biasX = 0;
            biasY = 0;
            document.removeEventListener('mousemove', moveEvent)
        });

        function moveEvent(e) {
            win.setPosition(e.screenX - biasX, e.screenY - biasY)
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

    #floating-window {
        -webkit-user-select: none;
        cursor: pointer;
        overflow: hidden;
    }

    #floating-window {
        cursor: pointer !important;
        height: 25px;
        width: 140px;
        border-radius: 4px;
        display: flex;
        border: 1px solid #3388FE;
    }
</style>
