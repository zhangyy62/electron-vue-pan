<template>
    <div>
        <dd v-for="rowDatas in bigIconDatas">
            <template v-for="file in rowDatas" >
                <div class="container" v-bind:class="file.isChecked ? 'container-checked ' : ''" @click="onClick(file)">
                    <div class="img-container" v-bind:class="getClass(file)"><img src=""></img></div>
                    <div><i>{{file.name}}</i></div>
                </div>
            </template>
        </dd>
    </div>
</template>

<script>
export default {
    name: 'v-bigIconList',
    data() {
        return {
            currentCheckedFile: null
        };
    },
    props: {
        bigIconDatas: Array
    },
    methods: {
        getClass(file) {
            if (file.isDir) {
                return 'dir-img';
            }
            if (file.type === 'ZIP') {
                return 'zip-img';
            }
            return '';
        },
        checkedClass(file) {
            return file.isChecked ? 'container-checked ' : '';
        },
        onClick(file) {
            // debugger;
            if (this.currentCheckedFile && this.currentCheckedFile.isChecked) {
                this.currentCheckedFile.isChecked = false;
            }
            const innerFile = file;
            console.log(file);
            innerFile.isChecked = !innerFile.isChecked;
            this.currentCheckedFile = file;
        }
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

        .container:hover {
            border: 1px solid rgb(224, 224, 224);
            border-radius: 5px;
            background: rgb(224, 224, 224)
        }

        .container-checked {
            border: 1px solid rgb(224, 224, 224);
            border-radius: 5px;
            background: rgb(224, 224, 224)
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
    .zip-img {
        background: url('/static/imgs/ZIP.png') center no-repeat;
    }
</style>
