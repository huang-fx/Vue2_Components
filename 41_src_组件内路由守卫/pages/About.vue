<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name: 'About',
        // beforeDestroy() {
        //     console.log('About组件即将被销毁了')            
        // },
        mounted() {
            window.aboutRoute = this.$route            
            window.aboutRouter = this.$router        
        },
        beforeRouteEnter(to, from, next) {
            if(to.meta.isAuth) {
                if(localStorage.getItem('school') === '尚硅谷') {
                    next()
                } else {
                    alert('学校名不对，请验证后登录')
                }
            } else {
                next()
            }
        },
        // beforeRouteLeave(to, from, next) { 

        // }
    }
</script>