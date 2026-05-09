<template>
    <div>
        <!-- <h1 v-text="msg" id="title"></h1> -->
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showH">点我显示信息</button>
        <School id="sch" ref="sch"/>
    </div>
</template>
 
<script>
   import School from './components/School' 

   export default {
        name: 'App',
        components: {
            School
        },
        data() {
            return {
                msg: '欢迎来到尚硅谷'
            }
        },
        methods: {
            showH() {
                console.log(this.$refs.title)                
                console.log(this.$refs.btn)                
                console.log(this.$refs.sch)                
                console.log(document.getElementById('sch'))                
            }
        },
   }
</script>
