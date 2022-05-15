<template>
  <main>
    <div class="container mx-auto text-center">
      <div class="bg-stone-200">
        <slot name="header"></slot>
      </div>
      <div class="bg-blue-200">
        <slot name="detail" class="bg-blue-200"></slot>
      </div>
    </div>
  </main>
</template>
