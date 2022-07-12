import { createStore } from "vuex";

export default createStore({
  // State is where the data lives
  state: {
    items: null,
    users: null,
  },
  // Mutations are used to update state
  mutations: {},
  // Actions are for ASYNC / Fetch calls
  actions: {},
});
