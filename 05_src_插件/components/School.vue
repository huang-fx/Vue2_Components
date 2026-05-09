<template>
    <div>
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="test">调用插件中的方法</button><br/><br/>
        <input type="text" v-fbind="x"><br/><br/>
        <button @click="x++">x+1</button><br/>
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
        },

        methods: {
            test() {
                this.hello()
            }
        }
    }
</script>