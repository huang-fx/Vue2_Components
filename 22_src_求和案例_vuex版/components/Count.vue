<template>
    <div>
        <h1>求和结果为：{{ $store.state.num }}</h1>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">和为奇数时相加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name: 'Count',
        data() {
            return {
                n: 1,
                sum: 0
            }
        },
        methods: {
            increment() {
                this.$store.commit('JIA', this.n)
            },
            decrement() {
                this.$store.commit('JIAN', this.n)
            },
            incrementOdd() {
                // 将逻辑判断写到组件中
                // if(this.$store.state.num %2) {
                //     // this.$store.dispatch('jiaOdd', this.n)
                //     this.$store.commit('JIA', this.n)
                // }
                // 将逻辑判断写到store的actions中
                this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('jiaWait', this.n)
            },
        }
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>