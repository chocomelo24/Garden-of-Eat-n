<template>
  <div class="card shadow">
    <router-link :to="{ name: 'SingleCardView', params: { id: item.id } }">
      <img :src="item.image" class="car-img mb-2" alt="Picture of item" />
    </router-link>
    <h5 class="text-black">{{ item.name }}</h5>
    <p class="text-secondary">
      {{ item.catergory }}
    </p>
    <p>R{{ item.price }}</p>
    <button class="btn-area" >
      <i class="fa fa-trash"></i>
      <span class="btn2">Add</span>
    </button>
  </div>
</template>
<script>
export default {
  props: ["item"],
  
};
</script>
<style scoped>
.card {
  color: black;
  width: 30%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
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
  width: 350px;
}
@media screen and (max-width: 800px) {
  .card {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
