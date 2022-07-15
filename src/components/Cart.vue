<template>
  <body>
    <div class="wrapper">
      <h1>Shopping Cart</h1>
      <div class="project">
        <div class="shop">
          <div class="box">
            <div class="content">
              <div v-for="item of cartItems" :key="item.id">
                <!-- {{ item }} -->
                <!-- <h4>Price:R {{ item.price }}</h4>
                <h4>Price:R {{ item.price }}</h4> -->
                <img :src="item.image" class="mb-2" alt="food" />
                <h3>{{ item.name }}</h3>
                <p class="color-secondary">{{ item.category }}</p>
                <!-- <p class="unit">
                  Quantity:
                  <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </p> -->
                <button class="btn-area" v-on:click="delitem(id)">
                  <i class="fa fa-trash"></i>
                  <span class="btn2">Remove</span>
                </button>
                <div class="right-bar">
                  <p>
                    <span>Subtotal</span> <span>R {{ item.price }}</span>
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p>
        <span>Total</span> <span>R {{ total }}</span>
      </p>
      <a href="#"> <i class="fa fa-shopping-cart"></i>Checkout</a>
    </div>
  </body>
</template>
<script>
export default {
  data() {
    return {
      total: "",
    };
  },
  methods: {
    delitem(id) {
      return this.$store.dispatch("get", id);
    },
  },
  computed: {
    calculatePrice(cartItems) {
      const item = cartItems;
      const amount = this.$store.state.cart.items.reduce;
      return (this.$store.state.cart.items.this.total = amount);
      // console.log(this.cartItems);
      // console.log(item);
    },
    cartItems() {
      return this.$store.state.cart;
    },
  },
  mounted() {
    console.log(this.$store.state.cart);
    this.calculatePrice(this.cartItems);
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: montserrat;
  background: white;
}
.wrapper {
  max-width: 1000px;
  margin: 0 auto;
}
.wrapper h1 {
  padding: 30px 0;
  text-align: center;
  text-transform: uppercase;
}
.project {
  display: flex;
}
.shop {
  flex: 75%;
}
.box {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  background: white;
  box-shadow: #42b983 (100, 100, 111, 0.2) 0.7px 29px 0;
}
.box img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
.content {
  padding: 20px;
  position: relative;
  width: 100%;
}
.btn-area {
  position: absolute;
  /* bottom: 20px; */
  right: 20px;
  padding: 10px 25px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}
.btn-area:hover {
  background-color: #42b983;
  color: white;
}
.unit input {
  width: 50px;
  padding: 8px;
  text-align: center;
}
.btn-area i {
  margin-right: 5px;
}
.right-bar {
  flex: 25%;
  margin-left: 20px;
  padding: 20px;
  height: 100px;
  background: white;
  box-shadow: #42b983 (100, 100, 111, 0.2) 0.7px 29px 0;
}
.right-bar hr {
  margin-bottom: 25px;
}
.right-bar p {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 20px;
}
.right-bar a {
  background-color: #42b983;
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;
  height: 40px;
  font-weight: 900;
}
.right-bar i {
  margin-right: 15px;
}
.right-bar a:hover {
  background-color: #42b983;
}
@media screen and (max-width: 700px) {
  .content h3 {
    margin-bottom: 15px;
  }
  .content h4 {
    margin-bottom: 20px;
  }
  .btn2 {
    display: none;
  }
  .box {
    height: 150px;
  }
  .box img {
    height: 150px;
    width: 200px;
  }
}
@media screen and (max-width: 900px) {
  .project {
    flex-direction: column;
  }
  .right-bar {
    margin-left: 0;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 125px) {
  .wrapper {
    max-width: 95%;
  }
}
</style>
