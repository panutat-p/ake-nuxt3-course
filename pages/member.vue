<script setup lang="ts">
const {r} = await useGetProfile();
</script>

<template>
  <div class="hero min-h-screen" style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl">HELLO!</h1>
        <h1 class="mb-5 text-3xl">id: {{ r?.data?.user?.id }}</h1>
        <h1 class="mb-5 text-3xl">name: {{ r?.data?.user?.name }}</h1>
        <h1 class="mb-5 text-3xl">Email: {{ r?.data?.user?.email }}</h1>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>
