<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: 'contact',
})

const isLoading = ref(true);
const {products} = await useGetProduct();
console.log(products);
isLoading.value = false;

</script>

<template>
  <section class="overflow-x-auto mx-20 my-4">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Detail</th>
        <th>Image</th>
      </tr>
      </thead>
      <div v-if="isLoading">
        <button class="btn loading">loading</button>
      </div>
      <tbody v-if="products?.data?.length">
      <tr v-for="item in products.data" v-bind:key="item.id">
        <th>{{ item.id }}</th>
        <th>{{ item.title }}</th>
        <th>{{ item.detail }}</th>
        <th><img v-bind:src="item.picture" alt="course picture" width="60"></th>
      </tr>
      </tbody>
    </table>
  </section>
</template>
