<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <h2>{{ number }}</h2>
        <button @click="SendSchoolName()">嗖~ 学校名称</button>
        <button @click="unbind()">点我解绑事件</button>
        <button @click="death()">点我销毁Student实例</button>
        <button @click="add()">点我number++</button>
    </div>
</template>

<script>     
    export default {
        name: 'TheSchool',
        data() {
            return {
                name: '长安大学',
                address: '西安',
                number: 1
            }
        },
        methods: {
            SendSchoolName() {
                this.$emit('xuexiao', this.name)
            },
            death() {
                this.$destroy()
            },
            unbind() {
                this.$off('xuexiao')
            },
            add() {
                console.log('add函数被调用了')
                this.number++                
            }
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