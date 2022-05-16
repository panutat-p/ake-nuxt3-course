<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: 'contact',
})

const {products, pending} = await useGetProduct();
console.log(products);

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
        <th>Action</th>
      </tr>
      </thead>
      <div v-if="pending">
        <button class="btn loading">loading</button>
      </div>
      <tbody v-if="products?.data?.length">
      <tr v-for="item in products.data" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.detail }}</td>
        <td><img v-bind:src="item.picture" alt="course picture" width="60"></td>
        <td>
          <NuxtLink class="link link-accent" v-bind:to="/product/+item.id">
            View
          </NuxtLink>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>
