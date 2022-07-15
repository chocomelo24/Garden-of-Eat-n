<template>
  <form class="d-flex flex-row gap-4 justify-content-center">
    <button class="btn mb-3 mt-3 btn-sm" @click="sortByPrice">
      Sort By Price
    </button>
    <input
      type="text"
      placeholder="Search..."
      class="form-control mt-3 mb-3"
      v-model="search"
    />
    <select class="mt-3 mb-3" v-model="category">
      <option value="All" selected>All</option>
      <option value="Starter">Starter</option>
      <option value="Main">Main</option>
      <option value="Dessert">Dessert</option>
      <option value="Drink">Drink</option>
      <option value="Sides">Side</option>
    </select>
  </form>
  <div v-if="filteredItems" class="container d-flex flex-row gap-5">
    <ItemCard v-for="item in filteredItems" :key="item.id" :item="item" />
  </div>
</template>
<script>
import ItemCard from "@/components/ItemCard.vue";
export default {
  data() {
    return {
      search: "",
      category: "All",
    };
  },
  components: {
    ItemCard,
  },

  mounted() {
    this.$store.dispatch("getItems");
  },
  computed: {
    filteredItems() {
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
  methods: {
    sortByPrice() {
      //gives function a name (does not need to be the same as the name given in the store)
      this.$store.commit("sortByPrice"); //runs the function in the store
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  text-align: center;
  flex-wrap: wrap;
}
.form-control {
  width: 30%;
  height: 50px;
}
@media screen and (max-width: 800px) {
  .property-container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
.btn {
  width: 150px;
}
</style>
