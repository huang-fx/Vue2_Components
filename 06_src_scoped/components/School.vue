<template>
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <span class="ys">我是less语言样式</span>
    </div>
</template>

<script>
    export default {
        name: 'TheSchool',
        data() {
            return {
                name: '清华',
                address: '北京',
                x: 1
            }
        }
    }
</script>

<style lang="less" scoped>
    .demo {
        background-color: seagreen;
        .ys {
            font-size: 40px;
        }
    }
</style>