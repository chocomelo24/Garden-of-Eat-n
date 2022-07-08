<template>
  <div class="card shadow mb-4">
    <img
      :src="item.image"
      class="car-img mb-4 img-fluid"
      alt="Picture of item"
    />
    <h5 class="text-black">{{ item.title }}</h5>
    <p class="text-secondary">
      {{ item.description }}
    </p>
    <p>{{ item.price }}</p>
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
#items {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
#boxes {
  display: flex;
  flex-direction: row;
  gap: 30px;
  text-align: center;
  flex-wrap: wrap;
}
</style>
