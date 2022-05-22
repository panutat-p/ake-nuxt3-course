<script setup lang="ts">
import Swal from 'sweetalert2';
import {useLogIn} from "~/composables/use-auth";
import {useStorage} from "@vueuse/nuxt/node_modules/@vueuse/core";

async function logIn(data) {
  console.log(`logIn(${data})`);
  const {r, e} = await useLogIn(data.email, data.password);
  console.log(`logIn() -> r: ${r} e: ${e}`)
  if (e.value) {
    Swal.fire({
      icon: 'error',
      title: e.value.data?.message,
    });
  }
  if (r.value) {
    useStorage('nuxtToken', r.value);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Logged In',
      showConfirmButton: false,
      timer: 1000
    })
    navigateTo('/member');
  }
}

</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse w-full">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <FormKit
              type="form"
              v-bind:actions="false"
              @submit="logIn"
          >
            <FormKit
                name="email"
                label="Email address"
                validation="required|email"
                v-bind:validation-messages="{
              required: 'Email must not be empty',
              email: 'Invalid Email',
                }"
            />
            <FormKit
                type="password"
                name="password"
                label="Password"
                validation="required|length:3"
                v-bind:validation-messages="{
              required: 'Password must not be empty',
              length: 'Invalid password',
                }"
            />
            <FormKit
                type="submit"
                label="Log In"
                input-class="$reset btn btn-primary w-full"
            />
          </FormKit>
        </div>
      </div>
    </div>
  </div>
</template>
