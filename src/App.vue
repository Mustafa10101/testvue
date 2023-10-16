<template>
  <header class="header">
    <nav>
      <ul class="list">
        <li class="item">
          <a href="#"><img src="/logo.svg" alt="" /></a>
        </li>
        <li class="item">
          <a class="link" href="#">Главная</a>&nbsp;&nbsp;&nbsp;<a
            @click="router.push({ name: 'CartView' })"
            >корзина {{ Store.cart.length }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { productsStore } from '@/stores/products'

const Store = productsStore()
const router = useRouter()
</script>

<style scoped>
.list {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  align-items: center;
}
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
button {
  border: none;
  background-color: transparent;
  outline: none;
}
.item {
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;
}
.link {
  color: #ba967d;
}
@media (max-width: 400px) {
  .list {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
