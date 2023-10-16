<template>
  <div class="container">
    <div class="products-container">
      <div class="products-list">
        <div
          class="product"
          v-for="product in displayedProducts"
          :key="product.id"
          @click="goToProductPage(product.id)"
        >
          <img src="../../public/image.png" alt="" />
          <div class="price-catalog">
            <h2>{{ product.title }} {{ product.category }}</h2>
          </div>
          <div class="price-catalog-item">
            <p class="price" href="#">{{ product.price }} ₽</p>
            <a class="basket" href="#"><img src="../../public/basket.png" alt="" /></a>
          </div>
        </div>
      </div>
      <button class="price-btn" @click="showMoreProducts">Показать еще</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'catalogView'
})
</script>

<script setup>
import { onMounted } from 'vue'
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const displayedProductsCount = ref(4)

const showMoreProducts = () => {
  displayedProductsCount.value += 4
}

const displayedProducts = computed(() => {
  return Store.products.slice(0, displayedProductsCount.value)
})

const Store = productsStore()
const router = useRouter()

const goToProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}

onMounted(() => {})
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

button {
  border: none;
  background-color: transparent;
  outline: none;
}
h2 {
  color: #333333;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
.products-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.price-btn {
  color: #6a6a6a;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 19px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  margin-top: 40px;
  width: 142px;
  cursor: pointer;
  margin-left: auto;
}

.products-list {
  padding-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 107px;
}
.product {
  width: 280px;
  height: 450px;
  box-shadow: 0px 0px 14px 1px #e6e6e6;
  cursor: pointer;
  text-align: start;
}
.price-catalog {
  padding: 20px;
}

.price {
  color: #333333;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
.price-catalog-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

@media (max-width: 1460px) {
  .products-list {
    grid-template-columns: repeat(3, 1fr);
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }
}
@media (max-width: 1100px) {
  .products-list {
    grid-template-columns: repeat(2, 1fr);
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }
}
@media (max-width: 750px) {
  .products-list {
    grid-template-columns: repeat(1, 1fr);
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
  }
  .price-btn {
    margin-right: auto;
  }
}
</style>
