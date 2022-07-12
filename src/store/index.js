import { createStore } from "vuex";

export default createStore({
  // State is where the data lives
  state: {
    users: null,
  },
  getters: {},
  // Mutations are used to update state
  mutations: {
    setUsers:(state, users) => {
      state.users = users;
    },
  },
  // Actions are for ASYNC / Fetch calls
  actions: {},
  modules: {},
});
