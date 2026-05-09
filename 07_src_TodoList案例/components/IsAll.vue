<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="All" @change="checkAll"/> -->
            <input type="checkbox" v-model="All"/>
        </label>
        <span>
            <span>已完成{{ stateTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: 'TheIsAll',
        props: ['todos', 'checkAllTodo', 'clearAllTodo'],
        computed: {
          // forEach实现
          // stateTotal() {
          //   let i = 0
          //   this.todos.forEach((todo) => {
          //     if(todo.state) {
          //       i++
          //     }
          //   })
          //   return i
          // }

          // reduce实现
          stateTotal() {
            return this.todos.reduce((total, todo) => total + (todo.state ? 1 : 0), 0)
          },
          total() {
            return this.todos.length
          },
          All:{
            get() {
              return this.stateTotal === this.total && this.total > 0
            },
            set(value) {
              this.checkAllTodo(value)
            }
          }
        },
        methods: {
          // checkAll(e) {
          //   this.checkAllTodo(e.target.checked)
          // }
          clearAll() {
            this.clearAllTodo()
          }
        }
    }
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>