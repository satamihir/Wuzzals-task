<template>
    <div>
        <!-- <Head>
            <Title>Brewed Beer | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head> -->
       <ProductDetails :product="product" />
    </div>
</template>

<script setup>



const { id } = useRoute().params
  const uri = `https://api.punkapi.com/v2/beers/${id}` ;
  console.log('data',uri);

  //  fetch the products
  const { data: product } = await useFetch(uri, { key: id })
 

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }


definePageMeta({
        layout: 'products'
    });
</script>

<style scoped>

</style>