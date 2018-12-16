<template>
    <div class="side-bar">
        <div class="infoCard">
            <div>{{name}}</div>
            <div>test</div>
            <div>{{usedVolumn}}/{{totalVolumn}}
                <span>扩容</span>
            </div>
        </div>
        <div class="menu-list">
            <p>{{meunOne}}</p>
            <ul> <span>传输列表</span>
                <li v-for = "item in meunTwo">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="menu-bottom">
            <a>会员中心</a>
            <div>回收站
               <span>|</span>
                我的分享
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sideBar',
    data() {
        return {
            name: 'test账户',
            usedVolumn: '100G',
            totalVolumn: '500G',
            meunOne: '全部文件',
            meunTwo: ['正在上传', '正在下载', '传输完成'],
        }
    }
}
</script>

<style lang="scss">
.side-bar {
    min-width: 200px;
    width: 200px;
    height: 100%;
    background: rgb(244, 244, 244);
    border: 0 solid rgb(211, 211, 211);
    border-right-width: 1px;

    .infoCard {
        border: 0 solid rgb(211, 211, 211);
        border-bottom-width: 1px;

        div:first-child {
            padding-top: 10px;
            padding-left: 20px;
            font-size: 14px;
        }

        div {
            padding-left: 20px;

        }

        div:last-child {
            margin-bottom: 10px;
            font-size: 12px;
            color: rgb(153, 153, 153);

            span {
                position: relative;
                right: 20px;
                float: right;
                cursor: pointer;
            }
        }
    }

    .menu-list {
        margin-top: 10px;
        font-size: 14px;
        color: rgb(72, 72, 72);

        ul {
            list-style:none;
            
            span {
                font-size: 12px;
                color: rgb(153, 153, 153);
                padding-left: 20px;
            }

            li {
                font-size: 14px;
                padding: 10px 0 10px 45px;
                color: rgb(72, 72, 72);
                width: 100%;

                &:hover {
                    background: rgb(229, 229, 229);
                }
            }
        }

        p {
            padding: 10px 0 10px 45px;
            &:hover {
                background: rgb(229, 229, 229);
            }
        }
    }

    .menu-bottom {
        bottom: 0px;
        position: absolute;
        width: 200px;
        text-align: center;

        a {
            border: 0 solid rgb(218, 96, 75);
            border-width: 1px;
            padding: 5px 50px 5px 50px;
            font-size: 13px;
            border-radius: 5px;
            color: rgb(218, 96, 75);
        }

        div {
            margin-top: 20px;
            font-size: 12px;
            color: rgb(153, 153, 153);
        
            span {
                margin: 0 20px 0 20px;
            }
        }
    }
}
</style>
