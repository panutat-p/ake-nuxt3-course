<script setup lang="ts">
/*
Nuxt bugs ?
NuxtLayout should be sufficient to do the job
 */
definePageMeta({
  layout: false,
  title: 'not found',
})
</script>

<template>
  <main>
    <NuxtLayout name="error">
      <template #header>
        <h1 class="text-5xl my-8">Page Not Found</h1>
        <div class="carousel carousel-center rounded-box">
          <div class="carousel-item">
            <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2" alt="Pizza"/>
          </div>
          <div class="carousel-item">
            <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=500B67FB" alt="Pizza"/>
          </div>
          <div class="carousel-item">
            <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=A89D0DE6" alt="Pizza"/>
          </div>
          <div class="carousel-item">
            <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=225E6693" alt="Pizza"/>
          </div>
          <div class="carousel-item">
            <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=9D9539E7" alt="Pizza"/>
          </div>
          <div class="carousel-item">
            <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=BDC01094" alt="Pizza"/>
          </div>
          <div class="carousel-item">
            <img src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="Pizza"/>
          </div>
        </div>
      </template>
      <template #detail>
        <div class="my-8 text-3xl text-blue-600">
          <NuxtLink to="/" class="link">Go Back</NuxtLink>
        </div>
      </template>
    </NuxtLayout>
  </main>
</template>
