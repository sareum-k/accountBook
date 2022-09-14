<script setup lang="ts">
import { ref } from 'vue'

import IconArrow from '@/components/icon/IconArrow.vue'
import MiddleRow from '@/components/row/MiddleRow.vue'

export interface ListItem {
  startDate: number
  endDate: number
  dayCount: number
  weekDeposit: number | null
  weekWithdraw: number | null
}

const date = new Date()
const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000
const kstGap = 9 * 60 * 60 * 1000
const today = new Date(utc + kstGap)
const thisMonth = ref<Date>(
  new Date(today.getFullYear(), today.getMonth(), today.getDate())
)

const currentYear = ref<number>(thisMonth.value.getFullYear())
const currentMonth = ref<number>(thisMonth.value.getMonth())

const movePrevMonth = () => {
  thisMonth.value = new Date(currentYear.value, currentMonth.value - 1, 1)
  currentYear.value = thisMonth.value.getFullYear()
  currentMonth.value = thisMonth.value.getMonth()
  getWeekDate()
}

const moveNextMonth = () => {
  thisMonth.value = new Date(currentYear.value, currentMonth.value + 1, 1)
  currentYear.value = thisMonth.value.getFullYear()
  currentMonth.value = thisMonth.value.getMonth()
  getWeekDate()
  console.log(firstWeek.value)
}

/////////////////주간 날짜
const firstWeek = ref<number[]>([])
const secondWeek = ref<number[]>([])
const thirdWeek = ref<number[]>([])
const fourthWeek = ref<number[]>([])
const fifthWeek = ref<number[]>([])
const sixthWeek = ref<number[]>([])

const getWeekDate = () => {
  firstWeek.value = []
  secondWeek.value = []
  thirdWeek.value = []
  fourthWeek.value = []
  fifthWeek.value = []
  sixthWeek.value = []

  // 이전 달의 첫째 날 날짜와 요일 구하기
  let startDay = new Date(currentYear.value, currentMonth.value, 0)
  let prevDay = startDay.getDay()

  // 이번 달의 마지막 날 날짜와 요일 구하기
  let endDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  let nextDate = endDay.getDate() // 30

  let weekDay = 1

  for (let i = prevDay; i < 7; i++) {
    firstWeek.value.push(weekDay++)
  }
  for (let i = 0; i < 7; i++) {
    secondWeek.value.push(weekDay++)
  }
  for (let i = 0; i < 7; i++) {
    thirdWeek.value.push(weekDay++)
  }
  for (let i = 0; i < 7; i++) {
    fourthWeek.value.push(weekDay++)
  }
  for (let i = 0; i < 7; i++) {
    if (nextDate >= weekDay) {
      fifthWeek.value.push(weekDay++)
    }
  }
  for (let i = 0; i < 7; i++) {
    if (nextDate >= weekDay) {
      sixthWeek.value.push(weekDay++)
    }
  }
}

getWeekDate()
</script>
<template>
  <div class="flex justify-evenly">
    <div class="w-1/2 space-y-4">
      <div class="flex items-center justify-between">
        <RouterLink :to="'/accountbook/create/indexCreate'">
          <button
            class="bg-green-900 text-yellow-500 text-sm px-4 py-1 rounded-6"
          >
            추가
          </button>
        </RouterLink>
        <div class="flex space-x-8">
          <button type="button" @click="movePrevMonth">
            <IconArrow />
          </button>
          <div class="font-bold text-lg w-28 text-center">
            {{ currentYear }}년 {{ currentMonth + 1 }}월
          </div>
          <button>
            <IconArrow
              class="rotate-180"
              type="button"
              @click="moveNextMonth"
            />
          </button>
        </div>
      </div>
      <MiddleRow
        :current-month="currentMonth"
        :week-date="firstWeek"
        :week-withdraw="0"
        :week-deposit="0"
      />
      <MiddleRow
        :current-month="currentMonth"
        :week-date="secondWeek"
        :week-withdraw="0"
        :week-deposit="0"
      />
      <MiddleRow
        :current-month="currentMonth"
        :week-date="thirdWeek"
        :week-withdraw="0"
        :week-deposit="0"
      />
      <MiddleRow
        :current-month="currentMonth"
        :week-date="fourthWeek"
        :week-withdraw="0"
        :week-deposit="0"
      />
      <MiddleRow
        v-if="fifthWeek.length !== 0"
        :current-month="currentMonth"
        :week-date="fifthWeek"
        :week-withdraw="0"
        :week-deposit="0"
      />
      <MiddleRow
        v-if="sixthWeek.length !== 0"
        :current-month="currentMonth"
        :week-date="sixthWeek"
        :week-withdraw="0"
        :week-deposit="0"
      />
    </div>
    <div class="w-1/3">Chart</div>
  </div>
</template>
