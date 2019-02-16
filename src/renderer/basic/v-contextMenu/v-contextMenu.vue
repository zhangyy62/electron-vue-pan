<template>
    <ul class="vue-contextmenu-listWrapper" :class="'vue-contextmenuName-' + contextMenuData.menuName">
        <li v-for="item in contextMenuData.menulists"
            class="context-menu-list"
            :key="item.btnName"
            @click.stop="fnHandler(item)">
            <i :class="item.icoName"></i>
            <span>{{item.btnName}}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'vContextMenu',
    props: {
        contextMenuData: {
            type: Object,
            requred: false,
            default() {
                return {
                    menuName: null,
                    axis: {
                        x: null,
                        y: null
                    },
                    menulists: [
                        {
                            fnHandler: 'adddata',
                            icoName: 'fa fa-home fa-fw',
                            btnName: 'New'
                        },
                        {
                            fnHandler: 'savedata',
                            icoName: 'fa fa-home fa-fw',
                            btnName: 'Save'
                        }
                    ]
                };
            }
        },
        transferIndex: {
            type: Number,
            default: 0
        }
    },
    watch: {
        'contextMenuData.axis': function (val) {
            const { x, y } = val;
            const that = this;
            const index = that.transferIndex;
            const menuName = `vue-contextmenuName-${that.contextMenuData.menuName}`;
            const menu = document.getElementsByClassName(menuName)[index];
            menu.style.display = 'block';
            menu.style.left = `${x}px`;
            menu.style.top = `${y}px`;
            menu.style.width = '80px';
            // 判断menu距离浏览器可视窗口底部距离,以免距离底部太近的时候，会导致menu被遮挡
            const menuHeight = this.contextMenuData.menulists.length * 32;
            const menuWidth = 150; // 不能用scrollWidth,同理
            const distanceToBottm = document.body.clientHeight - menu.offsetTop - menuHeight;
            // 同理判断距离右侧距离
            const distanceToRight = document.body.clientWidth - menu.offsetLeft - menuWidth;
            if (distanceToBottm < menuHeight) {
                menu.style.top = (y - menuHeight);
                menu.style.top += 'px';
            }
            if (distanceToRight < menuWidth) {
                menu.style.top = x - menuWidth;
                menu.style.top += 'px';
            }
            document.addEventListener('mouseup', e => {
                // 解决mac电脑在鼠标右键后会执行mouseup事件
                if (e.button === 0) {
                    menu.style.display = 'none';
                }
            }, false);
        }
    },
    methods: {
        fnHandler(item) {
            this.$emit(item.fnHandler);
        }
    }
};
</script>

<style>
    .vue-contextmenu-listWrapper {
        background: rgb(244, 244, 244);
        display: none;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
    }
    .vue-contextmenu-listWrapper .context-menu-list span {
        width: 80px;
        height: 32px;
        border-radius: 4px;
        color: #484848;
        text-align: center;
        line-height: 32px;
        background: rgb(244, 244, 244);
        text-decoration: none;
        list-style: none;
    }
    .vue-contextmenu-listWrapper .context-menu-list {
        cursor: pointer;
        display: block;
        width: 100%;
        height: 100%;
        outline: 0;
        border: 0;
    }
    .vue-contextmenu-listWrapper .context-menu-list i,  .vue-contextmenu-listWrapper .context-menu-list span {
        float: left;
    }
    .vue-contextmenu-listWrapper .context-menu-list i{
        padding: 0 10px 0 10px;
    }
    .vue-contextmenu-listWrapper .context-menu-list :hover {
        box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
        color: #ffffff;
        border-radius: 4px;
        background: #4281F4;
    }
</style>
