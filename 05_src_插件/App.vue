<template>
    <div>
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
                msg: '欢迎来到尚硅谷'
            }
        },
   }
</script>
