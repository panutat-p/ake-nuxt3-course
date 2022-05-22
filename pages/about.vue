<script setup lang="ts">
/*
We can omit definePageMeta
because file name is default.vue
 */
import {showDate} from "~/composables/use-example";

definePageMeta({
  layout: 'default',
  title: 'about',
})

const staticMessage = 'City Skylines';
const msg = ref('Assassin Creed');
let count = 0;

function changeMessage() {
  if (count % 2 === 0) {
    msg.value = msg.value.toLowerCase();
  } else {
    msg.value = msg.value.toUpperCase();
  }
  count += 1;
}

const images = reactive({
  url: 'https://via.placeholder.com/300x100/0000FF/808080',
  alt: 'placeholder image',
})

const isLoading = ref(true);

const result = useAdd(10, 5);

const currentDate = showDate();
</script>

<template>
  <main>
    <Head>
      <Title>About</Title>
      <Meta name="description" content="about"/>
    </Head>
    <div class="container px-5 mx-24 my-10">
      <h1 class="text-5xl font-bold custom-pink-text">About Us</h1>
      <p class="font-sarabun">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis incidunt
        inventore maiores nisi,
        non quisquam reiciendis rerum sint soluta. Dicta dignissimos dolor, ipsum numquam porro quibusdam ratione soluta
        ullam!</p>
      <div class="text-2xl">static variable rendering: {{ staticMessage }}</div>
      <div class="text-2xl">variable rendering: {{ msg }}</div>
    </div>
    <div class="mx-20">
      <button class="btn btn-primary" v-on:click="changeMessage()">CLICK</button>
    </div>
    <div class="mx-28">
      <img src="images/panda-object.png" alt="panda object">
    </div>
    <div class="mx-28">
      <img v-bind:src="images.url" v-bind:alt="images.alt">
    </div>
    <div class="mx-28" v-if="isLoading">
      <button class="btn loading">loading</button>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl mx-32">
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"/></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="mx-28 text-3xl">
      useAdd: {{ result }}
    </div>
    <div class="mx-28 text-3xl">
      showDate: {{ currentDate }}
    </div>
  </main>
</template>
