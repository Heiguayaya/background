<template>
  <div class="shuffle-container">
    <input
      @keypress.enter="addTodo"
      v-model="newTodoContent"
      class="todo-content"
      placeholder="todos"
      type="text"
    />
    <button @click="shuffle" class="shuffle">随机排序</button>
    <transition-group class="todo-container" name="todo" tag="ul">
      <li class="todo" v-for="item in todos" :key="item.id">
        <span>{{ item.content }}</span>
        <button @click="finishTodo(item)">完成</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
//随机id
function randomId() {
  return Math.random().toString(16).substr(2, 5);
}

export default {
  data() {
    return {
      todos: [
        { id: randomId(), content: "完成「vue过渡和动画的」的学习" },
        { id: randomId(), content: "看一部电影" },
        { id: randomId(), content: "学一首新歌" },
      ],
      newTodoContent: "",
    };
  },
  methods: {
    //随机排序
    shuffle() {
      return this.todos.sort(() => Math.random() - 0.5);
    },
    //完成并删除任务
    finishTodo(item) {
      this.todos = this.todos.filter((it) => it !== item);
    },
    //添加任务
    addTodo() {
      if (!this.newTodoContent) return;
      this.todos.unshift({
        id: randomId(),
        content: this.newTodoContent,
      });
      this.newTodoContent = "";
    },
  },
};
</script>

<style>
.shuffle-container {
  width: 600px;
  margin: 1em 0;
  padding: 1.5em;
  border-radius: 5px;
}
.shuffle {
  margin: 1em 0;
}
.todo-content {
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 1.3em;
}
.todo-container {
  list-style: none;
  padding: 0;
  margin: 1em 0;
}
.todo {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  padding: 0.5em 0;
  border-bottom: 1px solid #ccc;
}
.todo-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.todo-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.todo-enter-active,
.todo-leave-active,
.todo-move {
  transition: 0.5s;
}

/* .todo-leave-active {
  position: absolute;
} */
</style>
