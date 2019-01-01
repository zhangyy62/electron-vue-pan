<template>
    <div class="main-content">
        <div class="content-title">
            <span>全部文件</span>
            <span>已全部加载，共{{totalFileCount}}个</span>
        </div>
        <div class="content">
            <router-view :bigIconDatas="rowDatas" :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></router-view> 
        </div>
    </div>
</template>

<script>
import vTable from '@/basic/v-table/v-table'
import vbigIconList from '@/basic/v-bigIconList/v-bigIconList'
import mainContentController from './mainContentController.js';


export default {
    name: 'mainContent',
    components: {
        vTable,
        vbigIconList
    },
    data() {
        return {
            totalFileCount: Math.floor(Math.random() * 100),
            searchQuery: '',
            gridColumns: ['name', 'size', 'date'],
            gridData: null,
            mainContentController,
            rowDatas: null
        }
    },
    created() {
        this.$http.get('/static/mock/fileList.json', {})
        .then((result) => {
            console.log(result);
            this.gridData = result.data;
            this.rowDatas = this.mainContentController.computeRows(result.data);
            console.log(this.rowDatas);
        })
    }
}
</script>

<style lang="scss">
    .main-content {
        height: 100%;
        width: 100%;
        background: rgb(244, 244, 244);

        .content-title {
            width: 100%;
            display: inline-block;
            height: 25px;
            background: white;
            border: 0 solid rgb(211, 211, 211);
            border-bottom-width: 1px;

            span {
                margin-left: 10px;
                line-height: 25px;
            }

            span:last-child {
                font-size: 11px;
                float: right;
                margin-right: 10px;
                color: rgb(153, 153, 153);                
            }
        }

        .content {
            background: rgb(244, 244, 244);
        }
    }

</style>
