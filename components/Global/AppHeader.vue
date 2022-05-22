<script setup lang="ts">
import { useStorage } from '@vueuse/nuxt/node_modules/@vueuse/core';
import Swal from 'sweetalert2';

const profile = await useGlobalProfile();
console.log('useGlobalProfile on header');
console.log(profile.value);

const logOut = () => {
  const token = useStorage('nuxtToken', null);
  token.value = null;
  navigateTo('/');
  Swal.fire({
    icon: 'info',
    title: 'Logged Out',
  });
}
</script>

<template>
  <div class="navbar bg-primary dark:text-white">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      <ul class="menu menu-horizontal p-0">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
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
        <li>
          <NuxtLink to="/login">Log In</NuxtLink>
        </li>
        <li tabindex="0">
          <a>
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
          </a>
          <ul class="p-2 bg-primary">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered"/>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791"/>
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
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
