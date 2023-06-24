<template>
  <div>
    <Head>
      <Title>Nuxt-Shop | {{ product?.title }}</Title>
      <Meat name="description" :content="product?.description"/>
    </Head>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'custom'
  })
  const {id} = useRoute().params
  const uri = `https://fakestoreapi.com/products/${id}`
  const {data: product} = useFetch(uri, {key: id})
  // 异步问题
    // if (!product.value) {
    //   throw createError({
    //     statusCode: 404,
    //     statusMessage: "Product not found",
    //     fatal: true
    //   })
    // }
</script>

<style scoped>

</style>