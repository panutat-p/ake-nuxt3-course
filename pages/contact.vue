<script setup lang="ts">
/*
We can omit definePageMeta
because file name is default.vue
 */
definePageMeta({
  layout: 'default',
  title: 'contact',
})
</script>

<template>
  <main>
    <Head>
      <Title>Contact</Title>
      <Meta name="description" content="contact"/>
    </Head>
    <div class="container px-5 mx-24 my-10">
      <h1 class="text-5xl font-bold">Contact Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis incidunt inventore maiores nisi,
        non quisquam reiciendis rerum sint soluta. Dicta dignissimos dolor, ipsum numquam porro quibusdam ratione soluta
        ullam!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi culpa debitis dolorum et
        exercitationem ipsam itaque labore laudantium numquam quibusdam rem, repudiandae sit suscipit totam ut vel vero
        voluptatem?</p>
    </div>
    <div class="card card-side bg-base-100 shadow-xl mx-32">
      <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"></figure>
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  </main>
</template>
