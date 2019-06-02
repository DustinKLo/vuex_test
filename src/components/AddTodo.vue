<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form v-on:submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit">
      </form>
    </div>
  </div>
</template>

<script>
// mapActions is similar to mapDispatchToProps in redux
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data: function() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit: function(event) {
      event.preventDefault();  // so we dont refresh the page
      this.addTodo(this.title);  // method taken from mapActions
      this.title = "";
    }
  }
};
</script>


<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>

