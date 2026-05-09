<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>    
    export default {
        name: 'TheSchool',
        data() {
            return {
                name: '长安大学',
                address: '西安'
            }
        },
        mounted() {
            this.$bus.$on('hello', (data) => {
                console.log('你还真别说唉 成功了 你看数据来了', data)                
            })
        }
    }
</script>

<style scoped>
    .school {
        background-color: seagreen;
        padding: 5px;
        margin-top: 30px;
    }
</style>