<template>
  <div class="container d-flex flex-row gap-5">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
<script>
import ItemCard from "@/components/ItemCard.vue";
export default {
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/items")
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
