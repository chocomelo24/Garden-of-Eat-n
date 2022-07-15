<template>
  <div v-if="item" class="container">
    <div class="card shadow mb-3">
      <img :src="item.image" class="car-img mb-2" alt="Picture of item" />
      <h5 class="text-black">{{ item.name }}</h5>
      <p class="text-secondary">
        {{ item.catergory }}
      </p>
      <p>{{ item.description }}</p>
      <p>R{{ item.price }}</p>
      <!-- <input type="number" placeholder="qty" v-model="qty" /> -->
      <button @click="addToCart(item)" class="btn mb-3">
        <i class="fa-solid fa-cart-arrow-down"></i>
        <span class="btn2">Add</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    item() {
      return this.$store.state.item;
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit("updateCart", item);
    },
  },
  mounted() {
    this.$store.dispatch("getSingleItem", this.id);
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

a {
  text-decoration: none;
}

.card {
  color: black;
  width: 30%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.card p {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#items {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
.car-img {
  height: 275px;
  aspect-ratio: 1;
}
@media screen and (max-width: 800px) {
  .card {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
