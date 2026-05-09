<template>
  <transition name="todo" appear>
    <li>
      <label>
        <input type="checkbox" :checked="todo.state" @click="changeId(todo.id)"/>
        <!-- <input type="checkbox" v-model="todo.state"/> -->
        <span v-show="!todo.isEdit">{{ todo.name }}</span>
        <input 
          type="text"
          :value="todo.name"
          v-show="todo.isEdit"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        >
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
      <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
    </li>
  </transition>
</template>

<script> 
  import pubsub from 'pubsub-js'
  export default {
    name: 'TheItem',
    props: ['todo'],
    methods: {
      changeId(id) {
        this.$bus.$emit('checkTodo', id)
      },
      handleDelete(id) {
        if(confirm('确定删除吗？')) {
          // this.$bus.$emit('deleteTodo',id)
          pubsub.publish('deleteTodo', id)
        }
      },
      handleEdit(todo) {
        if(todo.hasOwnProperty('isEdit')) {
          todo.isEdit = true
        } else {
          this.$set(todo, 'isEdit', true)
        }
        this.$nextTick(() => {
          this.$refs.inputTitle.focus()
        })
      },
      handleBlur(todo, e) {
        todo.isEdit = false
        if(!e.target.value.trim()) alert('不可为空值!!!')
        this.$bus.$emit('updateTodo', todo.id, e.target.value)
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

.todo-enter-active {
    animation: atguigu 1s;
}

.todo-leave-active {
    animation: atguigu 1s reverse;
}

@keyframes atguigu {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}
</style>