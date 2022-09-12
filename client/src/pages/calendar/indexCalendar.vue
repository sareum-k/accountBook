<script setup lang="ts">
import { ref } from 'vue'

import RoundedRow from '@/components/row/roundedRow.vue'
import CalendarBase from '@/components/calendar/CalendarBase.vue'

const dayWithdraw = ref<number>(250000)
const dayDeposit = ref<number>(1500000)
const monthWithdraw = ref<number>(2740000)
const monthDeposit = ref<number>(2980000)

// 한국 시간으로 지정해서 날짜 가져오기
const date = new Date()
const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000
const kstGap = 9 * 60 * 60 * 1000
const today = new Date(utc + kstGap)
const thisMonth = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate()
)
</script>
<template>
  <div class="flex space-x-10">
    <div class="w-2/3">
      <CalendarBase
        :today="today"
        :this-month="thisMonth"
        :day-withdraw="dayWithdraw"
        :day-deposit="dayDeposit"
      />
    </div>
    <div class="w-1/3 space-y-3 pt-[3.1rem]">
      <RoundedRow>
        <template #title>
          <div class="font-semibold">
            {{ today.getMonth() + 1 }}월의 총 지출:
          </div>
        </template>
        <template #content>
          <div class="text-red-500">{{ monthWithdraw.toLocaleString() }}원</div>
        </template>
      </RoundedRow>
      <RoundedRow>
        <template #title>
          <div class="font-semibold">
            {{ today.getMonth() + 1 }}월의 총 입금:
          </div>
        </template>
        <template #content>
          <div class="text-blue-900">{{ monthDeposit.toLocaleString() }}원</div>
        </template>
      </RoundedRow>
    </div>
  </div>
</template>
