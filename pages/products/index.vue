<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p.id">
                <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
                <ProductCard :product="p" />
            </div>
        </div>
        <p>Products</p>

    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    });

    //fetch the products
    const {data: products} = await useFetch('https://api.punkapi.com/v2/beers?brewed_after=11-2012/');

    useHead({
        title: 'Brewed Beer ',
        meta: [
            {name: 'description', content: 'Brewed Beer'}
        ]
    })
</script>

<style scoped>

</style>