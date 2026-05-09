<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <h1>俺的学校是：{{ schoolName }}</h1>
        <Student :StudentName="StudentName"/>
        <!-- 自定义事件的第一种写法 -->
        <!-- <School @xuexiao="SchoolName" @click.native="show"/> -->
        <!-- 自定义事件的第二种写法 -->
        <School ref="school"/>
    </div>
</template>

<script>
   import Student from './components/Student' 
   import School from './components/School'

   export default {
        name: 'App',
        components: {
            Student,
            School
        },
        data() {
            return {
                msg: '欢迎来到尚硅谷',
                schoolName: ''
            }
        },
        methods: {
            StudentName(studentName) {
                console.log('过来了你：', studentName)                
            },
            SchoolName(schoolName) {
                console.log('我的学校是：', schoolName)   
                this.schoolName = schoolName             
            },
            show() { 
                alert('我敲')
            }
        },
        mounted() {
            this.$refs.school.$on('xuexiao', this.SchoolName)
            // this.$refs.school.$on('xuexiao', (schoolName) => {
            //     this.schoolName = schoolName  
            //     console.log(this)                
            // })

            // 可实现异步效果
            // setTimeout(() => {
            //     this.$refs.school.$on('xuexiao', this.SchoolName)
            // }, 5000);
        }
   }
</script>

<style>
    .app {
        background-color: slateblue;
        padding: 5px;
    }
</style>

