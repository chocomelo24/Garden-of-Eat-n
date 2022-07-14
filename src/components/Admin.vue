<template>
  <form>
    <div class="container">
      <label for="email"><b>Email</b></label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Email"
        name="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        class="form-control"
        placeholder="Enter Password"
        name="psw"
        required
      />

      <button type="submit">Login</button>
    </div>
  </form>

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
      <tr>
        <!-- <th scope="row">{{ item.id }}</th>
        <td><img :src="item.image" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.image }}</td> -->
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ["item"],
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
  background-color: #04aa6d;
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
