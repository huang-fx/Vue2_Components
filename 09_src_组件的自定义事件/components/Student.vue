<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
        <button @click="SendStudentName()">嗖~ 学生姓名</button>
    </div>
</template>

<script>
    export default {
        name: 'TheStudent',
        props: ['StudentName'],
        data() {
            return {
                name: '小罗伯特·唐尼',
                age: 18
            }
        },
        methods: {
            SendStudentName() {
                this.StudentName(this.name)
            }
        }
    }
</script>

<style scoped>
    .student {
        background-color: saddlebrown;
        padding: 5px;
    }
</style>