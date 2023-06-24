<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in productsData">
      <ProductCard :product="p"></ProductCard>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'custom'
  })
  const {data: productsData} = useFetch('https://fakestoreapi.com/products')
  useHead({
    title: 'Nuxt-Shop | Product',
    meta: [
      {name: 'description', content: 'Nuxt-Shop Description'}
    ]
  })
</script>

<style scoped>

</style>