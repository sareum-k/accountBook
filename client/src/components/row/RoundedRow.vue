<script setup lang="ts"></script>
<template>
  <div
    class="flex space-x-3 rounded-6 border border-green-900 p-5 items-center justify-center border-dashed"
  >
    <slot name="title" />
    <slot name="content" />
  </div>
</template>
