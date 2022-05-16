<script setup lang="ts">
import {useGetProductById} from "~/composables/use-product";

definePageMeta({
  layout: 'default',
  title: 'product detail',
})
const route = useRoute();
const {products} = await useGetProductById(route.params?.id);

function openUrlInNewTab(url: string) {
  window.open(`https://youtube.com/watch?v=${url}`, '_blank');
  console.log(`https://youtube.com/watch?v=${url}`);
}
</script>

<template>
  <section class="container m-auto my-5 text-center text-3xl">
    Product ID: {{ $route.params?.id }}
  </section>
  <section class="grid grid-cols-3 gap-4">
    <div v-for="item in products?.data" v-bind:key="item.id" class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"/></figure>
      <div class="card-body">
        <h2 class="card-title">{{ item.ch_title }}</h2>
        <p>{{ item.ch_dateadd }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" v-on:click="openUrlInNewTab(item.ch_url)">WATCH NOW</button>
        </div>
      </div>
    </div>
  </section>
</template>
