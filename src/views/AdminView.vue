<template>
  <Admin />
</template>
<script>
import Admin from "@/components/Admin.vue";
export default {
  components: {
    Admin,
  },
  computed: {
    User() {
      return this.$store.state.user; //Pulls the array from the store
    },
  },
};
</script>
