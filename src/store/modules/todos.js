const uuid = require('uuid/v4');

// stores state data, similar to reducers in redux
const state = {
  todos: []
};

// gets data
const actions = {
  async fetchTodos({ commit }, pageSize) {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    if (pageSize) {
      url = url + `?_limit=${pageSize}`;
    }
    let response = await fetch(url);
    let data = await response.json();
    commit("setTodos", data);
  },
  // **** alternate way to do this, but async await is better ****
  // fetchTodos: function({ commit }) {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => res.json())
  //     .then(res => {
  //       commit("setTodos", res);
  //     });
  // }

  async addTodo({ commit }, title) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: "POST",
      data: JSON.stringify({ title, completed: false })
    });
    const data = await response.json();
    const data2 = await {
      id: uuid(),
      completed: false,
      title
    };
    commit("newTodo", data2);
  },

  async deleteTodo({ commit }, id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE"
    });
    const data = await response.json();
    await commit("deleteTodo", id);
  },

  async updateTodoAction({ commit }, todoId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
      method: "PUT"
    });
    const data = await response.json();
    commit("updateTodo", data);
  }

};

// changes the state
const mutations = {
  /**
   * (state, todos)
   * state is the data store (similar to reducers)
   * todos is the payload data
   * **** the name of the event you use in commit("<commit name>", data) is the key in mutations
   */
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  newTodo: (state, todo) => {
    state.todos.unshift(todo);
  },
  deleteTodo: (state, id) => {
    state.todos = state.todos.filter(row => row.id !== id);
  },
  updateTodo: (state, data) => {
    const index = state.todos.findIndex(row => row.id === data.id);
    if (index !== -1) {
      let locatedTodo = state.todos[index];
      locatedTodo.completed = !locatedTodo.completed;
    }
  }
};

// this gets the data from the mutation
const getters = {
  todosList: (state) => state.todos,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
