<template>
  <i
    title="Edit"
    class="bi bi-pencil-square"
    id="edit"
    @click="toggleModal"
  ></i>
  <div v-if="active" class="mod">
    <form @submit.prevent="editItem(item.id)">
      <div>Item Name</div>
      <input type="text" v-model="item.name" />
      <div>Item Price</div>
      <input type="text" v-model="item.price" />
      <div>Item Description</div>
      <input type="text" v-model="item.description" />
      <div>Item Category</div>
      <select v-model="item.image">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <div>Item Image</div>
      <input type="text" v-model="item.image" />
      <br />
      <button type="submit">Save</button>
      <button type="button" @click="toggleModal">Close</button>
    </form>
  </div>
</template>
<script>
export default {

  props: ["item"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    editItem() {
      this.$store.dispatch("editItem", this.item);
    },
  },
};
</script>
