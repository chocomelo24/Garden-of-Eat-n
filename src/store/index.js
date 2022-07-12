import { createStore } from "vuex";

export default createStore({
  // State is where the data lives
  state: {
    items: null,
    users: null,
  },
  // Mutations are used to update state
  mutations: {
    setUsers: (state, users) => {
      state.users = users;
    },
    setItems: (state, items) => {
      state.items = items;
    },
  },
  // Actions are for ASYNC / Fetch calls
  actions: {},
});
