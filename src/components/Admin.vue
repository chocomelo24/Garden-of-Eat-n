<template>
  <!-- "!== null is" is not necessary, but is good practice as it adds extra security to the function working properly -->
  <!-- If there is user is not null, display this -->
  <div v-if="User !== null">
    <!-- If there is user is not null, display this -->
    Welcome {{ User.full_name }}
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td scope="row">{{ item.id }}</td>
          <td><img :src="item.image" /></td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.image }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <!-- If there is user is null, display this -->
    <form @submit.prevent="login">
      <div class="container">
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Email"
          name="email"
          required
          v-model="email"
        />

        <label for="psw"><b>Password</b></label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password"
          name="psw"
          required
          v-model="psw"
        />

        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {
      email: "", //This makes the default input an empty string
      psw: "", //This makes the default input an empty string
    };
  },

  computed: {
    User() {
      return store.state.user; //Pulls the array from the store
    },
    items() {
      return this.$store.state.items;
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
          password: this.psw, //retrieves the input from the user
        } /*This object becomes the payload. The payload will be compared to the original array to see if the inputs match*/
      );
    },
  },
};
</script>
<style scoped>
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
</style>
