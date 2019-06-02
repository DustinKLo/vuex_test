<template>
  <div>
    Filter Todos:
    <select v-on:change="handleFilter($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodos",
  methods: {
    ...mapActions(["fetchTodos"]),
    handleFilter: function(e) {
      const pageSize = parseInt(e.target.value);
      this.fetchTodos(pageSize);
    }
  },
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883;
  font-size: 1.25em;
}
</style>
