<template>
  <div>
    <h1>Todos Component</h1>
    <div class="todos">
      <div
        v-for="todo in todosList"
        v-bind:key="todo.id"
        class="todo"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        <input
          type="checkbox"
          class="checkbox"
          v-on:click="updateTodo(todo)"
          v-bind:checked="todo.completed === true"
        >
        {{ todo.title }}
        <i
          v-if="todo.completed === true"
          v-on:click="deleteTodo(todo.id)"
          class="fas fa-trash-alt"
        ></i>
      </div>
    </div>
  </div>
</template>

// v-on:dblclick="todo.completed = !todo.completed" 
// alternative to using a method handler (cleaner)

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodoAction"]),
    updateTodo: function(todo) {
      // passing in the whole todo object
      // todo.completed = !todo.completed;
      // commit("updateTodo", todo.id);  // this will be passed into the reducer logic with an api call
      this.updateTodoAction(todo.id);
    }
  },
  computed: mapGetters(["todosList"]),
  created: function() {
    this.fetchTodos();
  }
};
</script>


<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
input[type="checkbox"] {
  transform: scale(2);
}
.checkbox {
  float: left;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
