<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.state" @click="changeId(todo.id)"/>
      <!-- <input type="checkbox" v-model="todo.state"/> -->
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script> 
    export default {
        name: 'TheItem',
        props: ['todo'],
        methods: {
          changeId(id) {
            this.$bus.$emit('checkTodo', id)
          },
          handleDelete(id) {
            if(confirm('确定删除吗？')) {
              this.$bus.$emit('deleteTodo',id)
            }
          }
        }
    }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: rgba(80, 71, 81, 0.2);
}

li:hover button {
  display: block;
}
</style>