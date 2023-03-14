<template>
     <!-- breadcrumb -->
        <div class="container py-4 flex items-center gap-3">
            <a href="../index.html" class="text-primary text-base">
                <i class="fa-solid fa-house"></i>
            </a>
            <span class="text-sm text-gray-400">
                <i class="fa-solid fa-chevron-right"></i>
            </span>
            <p class="text-gray-600 font-medium">Profile</p>
        </div>
        <!-- ./breadcrumb -->

        <!-- wrapper -->
        <div class="container grid grid-cols-9 items-start gap-6 pt-4 pb-16">
            <!-- wishlist -->
            <div class="col-span-9 space-y-4">
                <div v-for="item in products" :key="item"
                 class="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                    <div class="w-28">
                        <img :src="item.image" alt="product 6" class="w-full">
                    </div>
                    <div class="w-1/3">
                        <h2 class="text-gray-800 text-xl font-medium uppercase">
                            {{ item.name }}</h2>
                    </div>
                    <div class="text-primary text-lg font-semibold">${{ item.price }}</div>
                    <div class="text-gray-600 cursor-pointer hover:text-primary">
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </div>
            </div>

            <!-- ./wishlist -->

        </div>
        <!-- ./wrapper -->

</template>

<script setup>
import { ref , onMounted } from "vue";
import { useUserStore } from "../stores/user";
const user = useUserStore();
const products = ref({});
onMounted(e => {
    getProducts()
})
 const getProducts = ()=> {
    axios.get('/products').then(res => {
        products.value = res.data;
        console.log(res.data);
    })
 }

 const cartProduct = () => {
    user.cart.forEach(element => {
        products.value = products.value.filters(el =>{
            el.id = element.porduct_id
        })
    });
    
 }


</script>

<style>

</style>