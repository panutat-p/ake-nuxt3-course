<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const config = useRuntimeConfig();
console.log(`public runtime config: ${config.public.baseURL}`); // expose to client
console.log(`private API key: ${config.apiKey}`); // got undefined 👍🏻
</script>

<template>
  <main>
    <Head>
      <Title>Nuxt App</Title>
      <Meta name="description" content="lorem ipsum"/>
    </Head>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </main>
</template>
