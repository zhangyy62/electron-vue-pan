<template>
    <div>
        <dd v-for="rowDatas in bigIconDatas">
            <template v-for="file in rowDatas" >
                <div @contextmenu="showMenu($event)" class="container" v-bind:class="file.isChecked ? 'container-checked ' : ''" @click="onClick(file)">
                    <div class="img-container" v-bind:class="getClass(file)"><img src=""></img></div>
                    <div><i>{{file.name}}</i></div>
                </div>
            </template>
        </dd>
        <v-context-menu :contextMenuData="contextMenuData"
	                  @savedata="savedata"
	                  @newdata="newdata" @download="download">
        </v-context-menu>
    </div>
</template>

<script>
import vContextMenu from '@/basic/v-contextMenu/v-contextMenu';

export default {
    name: 'v-bigIconList',
    components: {
        vContextMenu
    },
    data() {
        return {
            currentCheckedFile: null,
            contextMenuData: {
                menuName: 'demo',
                axis: {
                    x: null,
                    y: null
                },
                // Menu options (菜单选项)
                menulists: [
                    {
                        fnHandler: 'savedata',
                        icoName: 'fa fa-home fa-fw',
                        btnName: '打开'
                    },
                    {
                        fnHandler: 'download',
                        icoName: 'fa fa-home fa-fw',
                        btnName: '下载'
                    }
                ]
            }
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
            innerFile.isChecked = !innerFile.isChecked;
            this.currentCheckedFile = file;
        },
        savedata() {
            alert(1);
        },
        newdata() {
            console.log('newdata!');
        },
        download() {
            alert(`download:${this.currentCheckedFile.name}`);
        },
        showMenu(event) {
            event.preventDefault();
            const x = event.clientX;
            const y = event.clientY;
            // Get the current location
            this.contextMenuData.axis = {
                x, y
            };
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
        i {
            font: 12px/1.5 "Microsoft YaHei", arial, SimSun, 宋体;
            color: #424e67;
        }
    }
    .dir-img {
        background: url('/static/imgs/Folder.png') center no-repeat;
    }
    .zip-img {
        background: url('/static/imgs/ZIP.png') center no-repeat;
    }
</style>
