<script setup lang="ts">
withDefaults(
  defineProps<{
    dayWithdraw: number
    dayDeposit: number
  }>(),
  {
    dayWithdraw: 0,
    dayDeposit: 0,
  }
)
</script>
<template>
  <div class="space-y-2 text-xs">
    <div class="flex items-center">
      <div class="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
      {{ dayDeposit.toLocaleString() }}
    </div>
    <div class="flex items-center">
      <div class="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
      {{ dayWithdraw.toLocaleString() }}
    </div>
  </div>
</template>
