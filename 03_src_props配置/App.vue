<template>
    <div>
        <Student :name="msg" sex="男" :age="18" />
    </div>
</template>

<script>
   import Student from './components/Student' 

   export default { 
        name: 'App',
        components: {
            Student
        },
        data() {
            return {
                msg: '欢迎来到尚硅谷'
            }
        },
   }
</script>
