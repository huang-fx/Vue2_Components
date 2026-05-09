<template>
    <div class="demo">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'TheStudent',
        data() {
            return {
                name: '坦格利安',
                age: 18
            }
        },
    }
</script>

<style scoped>
    .demo {
        background-color: saddlebrown;
    }
</style>