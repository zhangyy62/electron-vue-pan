<template>
    <table class="downloading">
        <thead>
            <tr>
                <th v-for="key in columns">
                {{key}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in datas">
                <td v-for="key in columns">
                    <span v-if="key === '文件名'">{{data[key]}}</span>
                    <span v-else-if="key === '大小'">{{`${data.downloaded}MB / ${data.total}MB`}}</span>
                    <span v-else-if="key === '状态'">
                       <div class="progress-layout">
                            <div class="progress" >
                                <div class="bar" :style="data.controller ? data.controller.getFullProgressValue() + '' : 0 + '%'"></div>
                            </div>
                    </div>
                    </span>
                    <span v-else-if="key === '操作'">
                        <button v-on:click="clickDownload(data)">{{data.downloading ? '开始' : '暂停'}}</button>
                        <button>删除</button>
                        <button>查看所在位置</button>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import Vue from 'vue';
import FileDownload from '../../../controller/downLoad';

export default Vue.extend({
    name: 'downloading',
    data() {
        return {
            columns: ['文件名', '大小', '状态', '操作'],
            datas: [
                {
                    文件名: '2131',
                    大小: '11.21MB / 840.23MB',
                    状态: '12',
                    downloading: true,
                    path: 'https://speed.hetzner.de/100MB.bin',
                    total: 0,
                    downloaded: 0,
                    progress: '0%',
                    controller: null
                }
            ],
            FileDownload
        };
    },
    methods: {
        clickDownload(item) {
            const that = item;
            if (that.downloading) {
                that.controller.download(that.path);
            }
            that.downloading = !that.downloading;
        },
        getProgressWidth(item) {
            const that = item;
            return `width: ${that.controller ? that.controller.getProgressValue() : 0} %`;
        }
    },
    mounted() {
        this.datas.forEach(item => {
            const that = item;
            const controller = new FileDownload(item.downloaded, item.progress);
            Vue.set(that, 'controller', controller);
        });
    }
});
</script>

<style lang="scss">

.downloading {
    background-color: #fff;
    width: 100%;

    th {
        background-color: rgb(250, 250, 250);
        color: rgb(153, 153, 153);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-align: left;
        font-size: 11px;
    }

    td {
    }

    th, td {
        min-width: 120px;
        padding: 10px 20px;
    }

    th.active {
        color: rgb(153, 153, 153);
    }

    th.active .arrow {
        opacity: 1;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
        color: rgb(153, 153, 153);
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid rgb(153, 153, 153);
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid rgb(153, 153, 153);
    }

     .progress-layout {
        height: auto;
        width: 150px;

        .progress {
            padding-top: 0;
            padding-left: 0;
            overflow: hidden;
            height: 5px;
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
        margin-right: 10px;
    }
}
</style>
