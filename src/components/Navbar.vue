<template>
  <nav>
    <router-link class="text" to="/">Home</router-link> |
    <router-link class="text" to="/menu">Menu</router-link> |
    <router-link class="text" to="/cart">Cart</router-link> |
    <router-link class="text" to="/admin">Admin</router-link>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav{
  background-color: #42b983;
}
.text{
  color: white;
}
nav a.router-link-exact-active {
  color: black;
}
</style>
