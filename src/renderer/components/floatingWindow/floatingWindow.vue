<template>
  <div id="floatingWindow" v-on:dblclick="clickFLWIN">
    <div class="logo"></div>
    <div class="content" >
      <div class="text" >拖拽上传</div>
    </div>
  </div>
</template>

<script>
const drag = require("electron-drag");

export default {
  name: "floatingWindow",
  mounted() {
    drag("#floatingWindow");

    if (!drag.supported) {
      document.querySelector("#floatingWindow").style["-webkit-app-region"] =
        "drag";
    }
  },
  methods: {
    clickFLWIN() {
        console.log("dbclick");
        this.$electron.ipcRenderer.send('showMainWindow');
    }
  }
};
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
