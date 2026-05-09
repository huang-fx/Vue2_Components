<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">宇智波佐助</h1>
            <h1 v-show="isShow" key="2">宇智波泉奈</h1>
        </transition-group>
        <!-- <transition name="hello" appear>
            <div v-show="isShow">
                <h1>宇智波佐助</h1>
                <h1>宇智波泉奈</h1>
            </div>
        </transition> -->
    </div>
</template>

<script>
export default {
    name: 'TheTest2',
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

.hello-enter, .hello-leave-to {
    transform: translateX(-100%);
}

.hello-enter-to, .hello-leave {
    transform: translateX(0);
}

.hello-enter-active, .hello-leave-active {
    transition: 0.5s linear;
}
</style>