<template>
  <!-- <h1>Welcome {{ user.full_name }}</h1> -->
  <input type="text" v-model="search" placeholder="Search" />
  <select v-model="category">
    <option value="All" selected>All</option>
    <option value="Starter">Starter</option>
    <option value="Main">Main</option>
    <option value="Dessert">Dessert</option>
    <option value="Drinks">Drink</option>
    <option value="Sides">Side</option>
  </select>
  <button @click="modal">Add</button>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Image</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Category</th>
        <th scope="col">Img URL</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td scope="row">{{ item.id }}</td>
        <td><img :src="item.image" class="image" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.image }}</td>
        <td><i class="fa-solid fa-trash-can"></i></td>
        <td><i class="fa-solid fa-pen-clip"></i></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {
      email: "", //This makes the default input an empty string
      psw: "", //This makes the default input an empty string
      search: "",
      category: "All",
    };
  },

  computed: {
    user() {
      return this.$store.state.user; //Pulls the array from the store
    },
    items() {
      // return this.$store.state.items?.filter((item) => {
      //   return item.name?.toLowerCase().includes(this.search.toLowerCase());
      return this.$store.state.items?.filter((item) => {
        let isMatch = true;
        if (!item.name.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "All" && item.category !== this.category)
          isMatch = false;
        return isMatch;
      });
    },
  },

  mounted() {
    this.$store.dispatch("getUser");
    this.$store.dispatch("getItems");
  },

  methods: {
    login() {
      store.dispatch(
        "login" /*login is the context(array)*/,
        {
          email: this.email, //retrieves the input from the user
          psw: this.psw, //retrieves the input from the user
        } /*This object becomes the payload. The payload will be compared to the original array to see if the inputs match*/
      );
    },
    modal() {},
  },
};
</script>
<style scoped>
<<<<<<< HEAD
=======
form {
  height: 100vh;
}
/* Login */
form {
  border: 3px solid #f1f1f1;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #42b983;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
button:hover {
  opacity: 0.8;
}
.container {
  padding: 16px;
}
span.psw {
  float: right;
  padding-top: 16px;
}
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

>>>>>>> f3977f8aea8f259736984b98084b2461c10d89ce
/* Admin */

.image {
  width: 100px;
  aspect-ratio: 1;
}
</style>
