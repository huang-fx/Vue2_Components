<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">动画效果</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'TheTest',
    data() {
        return {
            isShow: true
        }
    }
    // computed: {
    //     titleClass() {
    //         return this.isShow ? 'go' : 'come'
    //     }
    // },
    // methods: {
    //     showTitle() {
    //         this.isShow = !this.isShow
    //     }
    // }
}
</script>

<style scoped>
h1 {
    background-color: olivedrab;
}

.hello-enter-active {
    animation: atguigu 1s;
}

.hello-leave-active {
    animation: atguigu 1s reverse;
}

@keyframes atguigu {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}
</style>