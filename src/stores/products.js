import { defineStore } from 'pinia'
import data from './db.json'

export const productsStore = defineStore('products', {
  state: () => ({
    products: data.products,
    cart: []
  }),

  actions: {
    addToCart(product) {
      this.cart.push(product)
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
