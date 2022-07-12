import { createStore } from "vuex";

export default createStore({
  // State is where the data lives
  state: {
    items: null,
    users: null,
    singleItem: null,
  },
  // Mutations are used to update state
  mutations: {
    setUsers: (state, users) => {
      state.users = users;
    },
    setItems: (state, items) => {
      state.items = items;
    },
    setSingleItem: (state, item) => {
      state.singleItem = item;
    },
  },
  // Actions are for ASYNC / Fetch calls
  actions: {
    getItems: async (context) => {
      //async (context) must ALWAYS be in
      fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((items) => context.commit("setItems", items)); //sends the changes to the array

      /* How to get the fetch data in the components
      <div>
      <ul>
      <li v-for="item in items"> [Essentially a forEach function]
        <p>{{item.id}}</p>
      </li>
      </ul>
      </div>

      <script>
      export default {
     mounted() {
     this.$store.dispatch("getItems");
     }
        [this = refers to the component you're currently working in]
        [$store = accesses the store folder]
        [state = accesses the json file]
        [dispatch =sends any changes made to the array]
        }
      }
      }
      computed; {
     properties(){},
     [This displays the array]
     }
      </script>
      */
    },
    getUsers: async (context) => {
      fetch(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.length) return (this.user = data[0]);
          alert("No user found, please register");
        });
    },
    getSingleItem: async (context, id) => {
      fetch("http://localhost:3000/items/" + id)
        .then((res) => res.json())
        .then((items) => context.commit("setSingleItems", item));
    },
  },
});
