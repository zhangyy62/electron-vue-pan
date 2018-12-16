<template>
    <div class="sideBar">
        <div class="infoCard">
            <div>test账户</div>
            <div>test</div>
            <div>100G/10000G
                <span>扩容</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sideBar'
}
</script>

<style lang="scss">
.sideBar {
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
            }
        }
    }
}
</style>
