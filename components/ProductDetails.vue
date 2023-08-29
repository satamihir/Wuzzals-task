<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10" v-for="(value, key) in product" :key="key">
            <div class="p-7">
                <img :src="`${value.image_url}`" alt="product img" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">
                    {{ value.name }}
                </h2>
                <p class="text-xl my-7">Tagline{{ value?.tagline }}</p>
                <p class="text-sm" v-if="value?.abv">ABV: {{ value?.abv }}</p>
                <p v-if="value?.ibu"> IBU: {{ value?.ibu }}</p>
                <p v-if="containsLactose" class="text-warn">Contains: <button
                        class="py-1 px-4 shadow-md no-underline rounded-full bg-orange text-white font-sans font-semibold text-sm border-orange btn-primary hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">Lactose</button>
                </p>
                <p v-if="isDryHopped">Dry Hopped</p>
                <h3 class="font-bold border-b-2 mb-4 mt-7 pb-2">Product Description:</h3>
               
                <p class="mb-7">{{ value.description }}</p>

            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])

let containsLactose = false;
let isDryHopped = false;

product.forEach(element => {

    if ((element?.method?.twist != null && element?.method?.twist?.includes('lactose')) ||
        (element?.ingredients?.malt && element?.ingredients.malt?.name?.toLowerCase().includes('lactose'))) {
        containsLactose = true;
    }
    if (element?.method?.twist != null && element?.method?.twist.toLowerCase() === 'dry hop') {
        isDryHopped = true;
    }
})



</script>

<style scoped>
img {
    max-width: 400px;
    max-height: 500px;
}

.bg-orange {
    background: #faad63;
}
</style>