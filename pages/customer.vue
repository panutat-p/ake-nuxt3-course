<script setup lang="ts">
// const {data} = await useAsyncData('user', () => $fetch('api/contact'));
// const {data, pending} = await useLazyAsyncData('user', () => $fetch('api/contact')); // does not block navigation
const {data} = await useFetch('api/contact');
console.log(`contact: ${data}`);
const {data: apiVersion, pending: isPending} = await useLazyFetch(
    'https://api.codingthailand.com/api/version',
    { pick: ['data'] }
);

</script>

<template>
  <main>
    <Head>
      <Title>Customer</Title>
      <Meta name="description" content="customer"/>
    </Head>
    <div class="container px-5 mx-24 my-10">
      <h1 class="text-5xl font-bold">Customer Info</h1>
      <p class="font-sarabun">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis incidunt
        inventore maiores nisi,
        non quisquam reiciendis rerum sint soluta. Dicta dignissimos dolor, ipsum numquam porro quibusdam ratione soluta
        ullam!</p>
    </div>
    <section>
      <div class="mx-24">
        {{ data?.apiKey }}
      </div>
      <div class="mx-24">
        <ul v-for="item in data?.user" v-bind:key="item.id">
          <li>{{ item.id }} - {{ item.name }}</li>
        </ul>
      </div>
    </section>
    <section v-if="isPending">
      <button class="btn loading">loading</button>
    </section>
    <section>
      <div class="mx-24 mt-10">
        API Version: {{ apiVersion?.data?.version }}
      </div>
    </section>
  </main>
</template>
