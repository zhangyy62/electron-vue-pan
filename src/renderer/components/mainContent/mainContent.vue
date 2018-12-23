<template>
    <div class="main-content">
        <div class="content-title">
            <span>全部文件</span>
            <span>已全部加载，共{{totalFileCount}}个</span>
        </div>
        <div class="content">
            <router-view :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></router-view> 
        </div>
    </div>
</template>

<script>
import vTable from '../../basic/v-table/v-table'


export default {
    name: 'mainContent',
    components: {
        vTable
    },
    data() {
        return {
            totalFileCount: Math.floor(Math.random() * 100),
            searchQuery: '',
            gridColumns: ['name', 'size', 'date'],
            gridData: [
            { name: 'Chuck Norris', size: Infinity, date: '2017.01.01 20:30:21'},
            { name: 'Bruce Lee', size: 9000, date: '2018.10.01 12:23:32' },
            { name: 'Jackie Chan', size: 7000, date: '2018.01.02 13:10:21'},
            { name: 'Jet Li', size: 8000, date: '2017.05.01 19:30:1'}
            ]
        }
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
