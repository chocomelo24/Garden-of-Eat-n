<template>
  <router-link
    :to="{ name: 'SingleCardView', params: { id: item.id } }"
    class="link"
  >
    <div class="card shadow">
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
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  transition: all 0.6s ease;
}
.card:hover {
  transform: scale(1.02);
}

.link {
  text-decoration: none;
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
