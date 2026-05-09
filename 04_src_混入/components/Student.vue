<template>
    <div>
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
    // import { mixin } from '../mixin'

    export default {
        name: 'TheStudent',
        data() {
            return {
                name: '坦格利安',
                age: 18
            }
        },
        // mixins: [mixin]
    }
</script>