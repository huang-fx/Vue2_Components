<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
        <button @click="sendStudentName()">把学生名传递给School</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js' 
    export default {
        name: 'TheStudent',
        data() {
            return {
                name: '小罗伯特·唐尼',
                age: 18
            }
        },
        methods: {
            sendStudentName() {
                // this.$bus.$emit('hello', this.name)
                pubsub.publish('hello', this.name)
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