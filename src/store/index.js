import router from "@/router";
import { createStore } from "vuex";

export default createStore({
  // State is where the data lives
  state: {
    //Best to for the data name to be a single version of the array (properties = property)
    items: null,
    user: null,
    cart: [],
    item: null,
    items: null,
    user: null,
    asc: true,
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
    setUser: (state, user) => {
      state.user = user;
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },

    sortByPrice: (state) => {
      state.items.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.items.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    },
  },
  // Actions are for ASYNC / Fetch calls
  actions: {
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}` //the ${} is tha payload, and will compare the inputs to the original array
      );
      const userData = await response.json();
      console.log(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      if (!userData.length) return alert("No user found with these details"); //Lets the user know that if the information put inside does not match the array, an alert will appear
      context.commit("setUser", userData[0]);

      // const isAdmin = userData[0].isAdmin;
      // if (isAdmin === true) {
      //   // router.push('')
      // } else {
      //   router.push("/");
      // }
      // console.log(userData);
    },

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
    getUser: async (context) => {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((user) => context.commit("setUser", user));
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
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter((item) => item.id != id);
      context.commit("removeFromCart", newCart);
    },
  },
});
