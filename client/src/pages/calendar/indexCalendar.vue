<script setup lang="ts">
import RoundedRow from '@/components/row/roundedRow.vue'
import CalendarBase from '@/components/calendar/CalendarBase.vue'
</script>
<template>
  <div class="flex space-x-10">
    <div class="w-2/3">
      <CalendarBase />
    </div>
    <div class="w-1/3 space-y-3 pt-[3.1rem]">
      <RoundedRow>
        <template #title>
          <div class="font-semibold">8월의 총 지출:</div>
        </template>
        <template #content>
          <div class="text-red-500">230,000원</div>
        </template>
      </RoundedRow>
      <RoundedRow>
        <template #title>
          <div class="font-semibold">8월의 총 입금:</div>
        </template>
        <template #content>
          <div class="text-green-900">230,000원</div>
        </template>
      </RoundedRow>
    </div>
  </div>
</template>
