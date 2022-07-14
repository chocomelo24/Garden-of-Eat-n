<template>
  <button class="btn mb-3 btn-sm" @click="sortByPrice">Sort By Price</button>
  <div v-if="items" class="container d-flex flex-row gap-5">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
<script>
import ItemCard from "@/components/ItemCard.vue";
export default {
  components: {
    ItemCard,
  },

  mounted() {
    this.$store.dispatch("getItems");
  },
  computed: {
    items() {
      return this.$store.state.items;
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
