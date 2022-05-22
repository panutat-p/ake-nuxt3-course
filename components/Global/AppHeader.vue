<script setup lang="ts">
import { useStorage } from '@vueuse/nuxt/node_modules/@vueuse/core';
import Swal from 'sweetalert2';

// const profile = await useGlobalProfile();
// console.log(`global profile: ${JSON.stringify(profile.value)}`);

const logOut = () => {
  const token = useStorage('nuxtToken', null);
  token.value = null;
  navigateTo('/');
  Swal.fire({
    position: 'top-end',
    icon: 'info',
    title: 'Logged Out',
    showConfirmButton: false,
    timer: 1000
  })
  navigateTo('/');
}
</script>

<template>
  <div class="navbar bg-primary dark:text-white">
    <div class="flex-1">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">Home</NuxtLink>
      <ul class="menu menu-horizontal p-0">
        <li>
          <NuxtLink to="/product">Products</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/customer">Customer</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact Us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791"/>
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52">
          <li>
            <NuxtLink to="/login">Log In</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/member">Member</NuxtLink>
          </li>
          <li><a class="justify-between">Settings<span class="badge">New</span></a></li>
          <li><a href="#!" v-on:click.prevent="logOut">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: red;
  background-color: white;
}
</style>
