<template>
  <button @click="sortByPrice">Sort By Price</button>
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
      this.$store.commit("sortByPrice");
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
</style>
