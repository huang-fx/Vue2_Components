<template>
  <ul>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
    <!-- <li>传递过来的参数：{{ a }}</li>
    <li>传递过来的参数：{{ b }}</li> -->
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id', 'title']
}
</script>
