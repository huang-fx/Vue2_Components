<template>
    <div>
        <h2>{{ msg }}</h2>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ myAge + 1 }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="updateAge">修改年龄</button>
    </div>
</template>

<script>
    export default {
        name: 'TheStudent',
        data() {
            return {
                msg: '东北好风光',
                myAge: this.age
            }
        },
        // props: ['name', 'age', 'sex']
        props: {
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                default: 99
            },
            sex: {
                type: String,
                required: true
            }
        },
        methods: {
            updateAge() {
                this.myAge++
            }
        }
    }
</script>