<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key=m.id>
                <!-- to传参的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->
                <router-link :to="{
                    name: 'xiangqing',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                {id: '001', title: '消息1'},
                {id: '002', title: '消息2'},
                {id: '003', title: '消息3'},
            ]
        }
    }
}
</script>