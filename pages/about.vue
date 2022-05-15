<script setup lang="ts">
/*
We can omit definePageMeta
because file name is default.vue
 */
definePageMeta({
  layout: 'default',
  title: 'about',
})
</script>

<template>
  <main>
    <Head>
      <Title>About</Title>
      <Meta name="description" content="about"/>
    </Head>
    <div class="container px-5 mx-24 my-10">
      <h1 class="text-5xl font-bold">About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis incidunt inventore maiores nisi,
        non quisquam reiciendis rerum sint soluta. Dicta dignissimos dolor, ipsum numquam porro quibusdam ratione soluta
        ullam!</p>
    </div>
    <div class="mx-28">
      <img src="images/panda-object.png" alt="panda object">
    </div>
    <div class="card w-96 bg-base-100 shadow-xl mx-32">
      <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </main>
</template>
