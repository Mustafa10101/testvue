<template>
  <div class="container">
    <button @click="router.push({ name: 'catalog' })">Назад</button>
    <div class="product">
      <div class="product-image">
        <img src="../../public/Image.png" alt="" />
      </div>
      <div class="product-details">
        <h1>{{ selectedProduct.title }} {{ selectedProduct.category }}</h1>
        <p>Описание: {{ selectedProduct.description }}</p>
        <p>Размер: {{ selectedProduct.size }}</p>
        <p>Кол-во: {{ selectedProduct.count }}</p>
        <h2>Цена: {{ selectedProduct.price }} ₽</h2>
        <button @click="addToCart">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductDetails'
})
</script>

<script setup>
import { computed } from 'vue'
import { productsStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'
const store = productsStore()
const router = useRouter()
const route = useRoute()

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === route.params.id)
})

const addToCart = () => {
  store.addToCart(selectedProduct.value)
  router.push({ name: 'CartView' })
}
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}
h1 {
  margin-top: 9px;
}
p {
  color: #333333;
  font-size: 16px;
  font-weight: 400;
}
button {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  background-color: #910496;
  color: #e7e7e7;
  border-radius: 5px;
  padding: 12px 40px;
}
.product {
  display: flex;
  margin-top: 50px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  margin-right: 5px;
}
.product-image {
  margin-right: 24px;
}

@media (max-width: 1500px) {
  .container {
    padding-left: 30px;
  }
}

@media (max-width: 1000px) {
  .product {
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
  }
  .product-details {
    text-align: center;
  }
  p {
    max-width: 600px;
    padding-right: 10px;
    padding-left: 10px;
  }
}
@media (max-width: 360px) {
  .product {
    align-items: normal;
  }
}
</style>
