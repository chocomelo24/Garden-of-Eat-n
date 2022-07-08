<template>
  <div class="card shadow mb-4">
    <img
      :src="item.image"
      class="car-img mb-4 img-fluid"
      alt="Picture of item"
    />
    <h5 class="text-black">{{ item.title }}</h5>
    <p class="text-secondary">
      {{ item.location }}
    </p>
    <p>{{ item.price }}</p>
    <div class="d-flex flex-row justify-content-center">
      <i class="fa-solid fa-bed me-2"></i>{{ item.bedrooms }}
      <i class="fa-solid fa-shower me-2 ms-2"></i>{{ item.bathrooms }}
      <i class="fa-solid fa-car me-2 ms-2"></i>{{ item.carspace }}
      <i class="fa-solid fa-person me-2 ms-2"></i>{{ item.population }}
    </div>
    <p class="mt-2">{{ item.type }}</p>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style>
.card {
  color: black;
  width: 30%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 1px 1px 8px black;
  text-align: center;
}

.card p {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
