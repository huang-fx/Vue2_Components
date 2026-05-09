<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入人员姓名" v-model="name" />
        <button @click="add">添加</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addPersonSerive">添加一个人, 名字随机</button>
        <ul>
            <li v-for="p in personList" :key=p.id>{{ p.name }}</li>
        </ul>
        <h3>PersonList中第一个人的名字是：{{ firstPersonName }}</h3>
        <h3 style="color: red">count组件中的求和结果为：{{ sum }}</h3>
    </div>
</template>

<script>
    import { nanoid } from "nanoid"
    export default {
        name: 'Person',
        data() {
            return {
            name: ''
            }
        },
        computed: {
            personList() {
                return this.$store.state.PersonOptions.personList
            },
            sum() {
                return this.$store.state.CountOptions.sum
            },
            firstPersonName() {
                return this.$store.getters['PersonOptions/firstPersonName']
            }
        },
        methods: {
            add() {
                const personObj = { id: nanoid(), name: this.name }
                this.$store.commit('PersonOptions/ADD_PERSON', personObj)
                this.name = ''
            },
            addWang() {
                const personObj = { id: nanoid(), name: this.name}
                this.$store.dispatch('PersonOptions/addWang', personObj)
                this.name = ''
            },
            addPersonSerive() {
                this.$store.dispatch('PersonOptions/addPersonServer')
            }
        }
}
</script>