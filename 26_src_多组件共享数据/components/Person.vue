<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入人员姓名" v-model="name" />
        <button @click="add">添加</button>
        <ul>
            <li v-for="p in personList" :key=p.id>{{ p.name }}</li>
        </ul>
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
                return this.$store.state.personList
            },
            sum() {
                return this.$store.state.sum
            }
        },
        methods: {
            add() {
                const personObj = { id: nanoid(), name: this.name }
                this.$store.commit('ADD_PERSON', personObj)
                this.name = ''
            }
        }
}
</script>