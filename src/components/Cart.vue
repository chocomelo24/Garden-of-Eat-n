<template>
  <body>
    <div class="Cart-Container">
      <div class="”Header”">
        <h3 class="”Intro”">Food Cart</h3>
        <h5 class="”Removal”">Remove the rotten apples</h5>
      </div>
      <div class="”Cart-Items”">
        <div class="”image-box”"><img src=”images/apple.png” /></div>
        <div class="”about”">
          <h1 class="”title”">dd</h1>
          <h3 class="”subtitle”">2hfhf</h3>
          <img src=”images/veg.png” />
        </div>
        <div class="”counter”"></div>
        <div class="”prices”"></div>
      </div>
      <div class="”counter”">
        <div class="”btn”">+</div>
        <div class="”count”">4</div>
        <div class="”btn”">-</div>
      </div>
      <div class="prices">
        <div class="amount">R90.00</div>
        <div class="save"><u>Save for later</u></div>
        <div class="remove"><u>Remove</u></div>
      </div>
      <hr />
      <div class="”checkout”">
        <div class="”total”">
          <div>
            <div class="”Subtotal”">Sub-Total</div>
            <div class="”items”">4 items</div>
          </div>
          <div class="”total-amount”">R90.00</div>
        </div>
        <button class="”button”">Checkout</button>
      </div>
    </div>
  </body>
</template>
<script>
export default {};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom right, #e3f0ff, #fafcff);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Cart-Container {
  width: 70%;
  height: 85%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 25px 40px #42b983;
}
.Header {
  margin: auto;
  width: 90%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Intro {
  font-size: 20px;
  font-family: ‘Open Sans’;
  font-weight: 700;
  color: #2f3841;
}
.Removal {
  font-size: 14px;
  font-family: ‘Open Sans’;
  font-weight: 600;
  color: #42b983;
  cursor: pointer;
  border-bottom: 1px solid #42b983;
}

.Cart-Items {
  margin: auto;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-box {
  width: 15%;
  text-align: center;
}
.about {
  height: 100%;
}
.title {
  padding-top: 5px;
  line-height: 10px;
  font-size: 32px;
  font-family: ‘Open Sans’;
  font-weight: 800;
  color: #42b983;
}
.subtitle {
  line-height: 10px;
  font-size: 18px;
  font-family: ‘Open Sans’;
  font-weight: 600;
  color: #42b983;
}
.counter {
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: ‘Open Sans’;
  font-weight: 900;
  color: #42b983;
  cursor: pointer;
}
.count {
  font-size: 20px;
  font-family: ‘Open Sans’;
  font-weight: 900;
  color: #42b983;
}
.prices {
  height: 100%;
  text-align: right;
}
.amount {
  padding-top: 20px;
  font-size: 26px;
  font-family: ‘Open Sans’;
  font-weight: 800;
  color: #202020;
}
.save {
  padding-top: 5px;
  font-size: 14px;
  font-family: ‘Open Sans’;
  font-weight: 600;
  color: #42b983;
  cursor: pointer;
}
.remove {
  padding-top: 5px;
  font-size: 14px;
  font-family: ‘Open Sans’;
  font-weight: 600;
  color: #e44c4c;
  cursor: pointer;
}
hr {
  width: 66%;
  float: right;
  margin-right: 5%;
}
.checkout {
  float: right;
  margin-right: 5%;
  width: 28%;
}
.total {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.Subtotal {
  font-size: 22px;
  font-family: ‘Open Sans’;
  font-weight: 700;
  color: #202020;
}
.items {
  font-size: 16px;
  font-family: ‘Open Sans’;
  font-weight: 500;
  color: #42b983;
  line-height: 10px;
}
.total-amount {
  font-size: 36px;
  font-family: ‘Open Sans’;
  font-weight: 900;
  color: #202020;
}
.button {
  margin-top: 5px;
  width: 100%;
  height: 40px;
  border: none;
  background: linear-gradient(to bottom right, #b8d7ff, #8eb7eb);
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-family: ‘Open Sans’;
  font-weight: 600;
  color: #202020;
}
</style>
