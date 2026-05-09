<template>
    <div>
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'TheSchool',
        data() {
            return {
                name: '尚硅谷',
                address: '北京市海淀区'
            }
        },
    }
</script>