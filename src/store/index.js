import { createStore } from "vuex";

export default createStore({
  // State is where the data lives
  state: {
    //Best to for the data name to be a single version of the array (properties = property)
    items: null,
    user: null,
    cart: [],
  },
  // Mutations are used to update state
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    setSingleItem: (state, item) => {
      state.item = item;
    },
    updateCart: (state, item) => {
      state.cart.push(item);
    },
  },
  // Actions are for ASYNC / Fetch calls
  actions: {
    // login () {
    //   const { email, password } = payload;
    //   const response = await fetch(
    //     `http://localhost:3000/users?email=${email}&password=${password}`
    //   );
    //   const userData = await response.json();
    //   context.commit("setUser", userData[0]);
    // },

    getItems: async (context) => {
      //async (context) must ALWAYS be in
      fetch("http://localhost:3000/items")
        .then((res) => res.json())
        .then((items) => {
          context.commit("setItems", items);
        }); //sends the changes to the array

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

    getSingleItem: async (context, id) => {
      fetch("http://localhost:3000/items/" + id)
        .then((res) => res.json())
        .then((item) => context.commit("setSingleItem", item));
    },
    createItem: async (context, item) => {
      fetch("http://localhost:3000/items/", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          context.dispatch("getItems", item);
        });
    },
    editItem: async (context, item) => {
      fetch("http://localhost:3000/items/" + id, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          context.dispatch("getItems", item);
        });
    },
    deleteItem: async (context, id) => {
      fetch("http://localhost:3000/items/" + id, {
        method: "DELETE",
      }).then(() => {
        context.dispatch("getItems");
      });
    },
    addToCart: async (context, id) => {
      this.state.cart.item.push(id);
      context.dispatch("updateCart", this.state.cart);
    },
  },
});
