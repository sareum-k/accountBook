<script setup lang="ts">
withDefaults(
  defineProps<{
    currentMonth: number
    weekDate: number[]
    weekWithdraw: number
    weekDeposit: number
  }>(),
  {
    weekWithdraw: 0,
    weekDeposit: 0,
  }
)
</script>
<template>
  <div
    class="flex justify-between items-center border border-green-500 py-2 px-5 rounded-6"
  >
    <div class="text-sm font-semibold">
      {{ currentMonth + 1 }}월 {{ weekDate[0] }}일 - {{ currentMonth + 1 }}월
      {{ weekDate[weekDate.length - 1] }}일 ({{ weekDate.length }}일)
    </div>
    <div>
      <div class="text-xs text-blue-500">
        입금:
        {{ weekDeposit.toLocaleString() ? weekDeposit.toLocaleString() : 0 }}원
      </div>
      <div class="text-xs text-red-500">
        출금:
        {{
          weekWithdraw.toLocaleString() ? weekWithdraw.toLocaleString() : 0
        }}원
      </div>
    </div>
  </div>
</template>
