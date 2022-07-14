<template>
  <div class="Admin">
    <Admin />
  </div>
</template>
<script>
import Admin from "@/components/Admin.vue";
export default {
  components: {
    Admin,
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
