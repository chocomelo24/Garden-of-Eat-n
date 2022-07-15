<template>
  <nav>
    <router-link class="text" to="/">Home</router-link> |
    <router-link class="text" to="/menu">Menu</router-link> |
    <router-link class="text" to="/cart">Cart</router-link> |
    <div v-if="user">
      <router-link class="text" to="/admin">Admin</router-link>
    </div>
    <div v-else>
      <router-link class="text" to="/login">Login</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",

  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user; //Pulls the array from the store
    },
  },
};
</script>

<style scoped>
nav {
  background-color: #42b983;
}
.text {
  color: white;
}
nav a.router-link-exact-active {
  color: black;
}
</style>
