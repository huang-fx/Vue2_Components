<template>
    <div>
        <h1>求和结果为：{{ $store.state.num }}</h1>
        <h3>求和结果的10倍为：{{ $store.getters.bigSum }}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">和为奇数时相加</button>
        <button @click="incrementWait">等一等再加</button>
        <!-- <slot></slot> -->
        <!-- <slot name="haha" :game="game" msg="插槽携带的数据"></slot>
        <slot name="hehe" :game="game" msg="插槽携带的数据"></slot>
        <slot name="xixi"></slot> -->
    </div>
</template>

<script>
    export default {
        name: 'Count',
        data() {
            return {
                n: 1,
                sum: 0,
                game: ['王者荣耀', '和平精英', '英雄联盟', '绝地求生'] // 示例数据
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
                if(this.$store.state.num %2) {
                    this.$store.dispatch('jiaOdd', this.n)
                }
                // 将逻辑判断写到store的actions中
                // this.$store.dispatch('jiaOdd', this.n)
            },
            incrementWait() {
                this.$store.dispatch('jiaWait', this.n)
            },
        },
    }
</script>

<style>
    button {
        margin-left: 5px;
    }
</style>