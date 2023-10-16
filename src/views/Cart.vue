<template>
  <div class="main">
    <button class="thing" @click="router.push({ name: 'catalog' })">Выбрать еще товар</button>
    <div v-if="!store.cart.length"><h1>Корзина пуста</h1></div>
    <div class="cart-items" v-else>
      <div class="cart-item" v-for="item in store.cart" :key="item.id">
        <div class="item-details">
          <img src="../../public/Image.png" alt="" />
          <div class="descr">
            <h1>{{ item.title }} {{ item.category }}</h1>
            <p>{{ item.description }}</p>
            <p>{{ item.price }} ₽</p>
          </div>
          <button class="item-btn" @click="removeFromCart(item.id)">
            <img src="../../public/close.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CartView'
})
</script>

<script setup>
import { productsStore } from '../stores/products'
import { useRouter } from 'vue-router'
const store = productsStore()
const router = useRouter()

const removeFromCart = (id) => {
  store.removeFromCart(id)
}
</script>

<style scoped>
.item-details {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding-right: 10px;
}
.descr {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  max-width: 1440px;
  margin: 0 auto;
}
.cart-items {
  padding-top: 20px;
}
.item-btn {
  width: 15px;
  height: 15px;
}
.thing {
  padding: 12px 40px;
  background-color: #910496;
  color: #e7e7e7;
  border-radius: 5px;
}
button {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

@media (max-width: 660px) {
  .item-details {
    display: block;
    max-width: 270px;
  }
  .cart-items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .descr {
    padding: 5px;
  }
  .main {
    text-align: center;
  }
}
</style>
