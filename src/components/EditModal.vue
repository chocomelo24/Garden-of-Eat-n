<template>
  <i
    title="Edit"
    class="bi bi-pencil-square"
    id="edit"
    @click="toggleModal"
  ></i>
  <div v-if="active" class="mod">
    <form @submit.prevent="editItem(item.id)">
      <div>ARTIST NAME</div>
      <input type="text" v-model="item.name" />
      <div>ART NAME</div>
      <input type="text" v-model="item.price" />
      <div>TITLE</div>
      <input type="text" v-model="item.description" />
      <div>PRICE</div>
      <select v-model="item.category">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <div>CATEGORY</div>
      <select type="text" v-model="item.category">
        <option value="Abstract">Abstract</option>
        <option value="Painting">Painting</option>
        <option value="Sculpture">Sculpture</option>
        <option value="Drawing">Drawing</option>
        <option value="Widlife">Widlife</option>
      </select>
      <div>DESCRIPTION</div>
      <input type="text" v-model="piece.description" />
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
