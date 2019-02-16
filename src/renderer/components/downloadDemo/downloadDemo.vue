<template>
    <div class="download-demo">
       <div class="progress-layout">
            <div class="progress" v-on:click="clickProgress" >
                <div class="bar"  v-bind:style="progress"></div>
            </div>
       </div>
        <div>
            
        </div>
        <button v-on:click="clickDownload">开始</button> 
        <button v-on:click="pause">暂停</button> 
        <button v-on:click="continueDownload">继续</button> 
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ipcRenderer } from 'electron';

import FileDownload from '../../../controller/downLoad';

export default Vue.extend({
    name: 'downloadDemo',
    computed: {
        progress() {
            const progress = this.downloadController
                ? this.downloadController.getProgressValue() : 0;
            return `width: ${progress}%`;
        }
    },
    data() {
        return {
            progressValue: 0,
            downloadController: null
        };
    },
    methods: {
        clickProgress() {
            this.progressValue = Math.random() * 100;
        },
        clickDownload() {
            this.downloadController.download('https://speed.hetzner.de/100MB.bin');
        },
        pause() {
            this.downloadController.pause();
        },
        continueDownload() {
            this.downloadController.continue();
        }
    },
    mounted() {
        this.$electron.ipcRenderer.send('passDownlaod-message');
        ipcRenderer.on('passDownload-reply', () => {
            this.downloadController = new FileDownload(this.progressValue);
        });
    }
});
</script>

<style lang="scss">
.download-demo {
    display: flex;
    position: absolute;
    top: 10%;
    left: 10%;

    .progress-layout {
        height: auto;
        width: 150px;

        .progress {
            padding-top: 0;
            padding-left: 0;
            overflow: hidden;
            height: 20px;
            background-color: #f7f7f7;
            background-repeat: repeat-x;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            margin-right:12px;
        }

        .progress .bar {
            padding-left: 0;
            width: (random(100) /100 )* 100%;
            height: 100%;
            color: #ffffff;
            float: left;
            font-size: 12px;
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: center;
            text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
            background-color: rgb(101, 194, 73);
            background-repeat: repeat-x;
            box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
            box-sizing: border-box;
            transition: width 5s ease;
        }
    }

    button {
        width: 50px;
        height: 20px;
        margin: 0 0 0 10px;
    }

    
}

</style>
