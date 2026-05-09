<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <Student/>
        <School/>
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
        }
   }
</script>

<style>
    .app {
        background-color: slateblue;
        padding: 5px;
    }
</style>

