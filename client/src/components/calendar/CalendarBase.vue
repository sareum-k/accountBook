<script setup lang="ts">
import IconArrow from '@/components/icon/IconArrow.vue'

export interface Week {
  name: string
}

const week: Week[] = [
  { name: 'MON' },
  { name: 'TUE' },
  { name: 'WED' },
  { name: 'THU' },
  { name: 'FRI' },
  { name: 'SAT' },
  { name: 'SUN' },
]

const calendar =
  'border rounded-6 border-green-100 text-center grid place-items-start p-2'

const prevMonth: number[] = []
const nowMonth: number[] = []
const nextMonth: number[] = []

// 한국 시간으로 지정해서 날짜 가져오기
let date = new Date()
let utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000
let kstGap = 9 * 60 * 60 * 1000
let today = new Date(utc + kstGap)

let currentYear = today.getFullYear()
let currentMonth = today.getMonth()

// 이전 달의 마지막 날 날짜와 요일 구하기
let startDay = new Date(currentYear, currentMonth, 0)
let prevDate = startDay.getDate()
let prevDay = startDay.getDay()

// 이번 달의 마지막 날 날짜와 요일 구하기
let endDay = new Date(currentYear, currentMonth + 1, 0)
let nextDate = endDay.getDate() // 30
let nextDay = endDay.getDay() // 5

// 지난달
const getPrevMonth = () => {
  for (let i = prevDate - prevDay + 1; i <= prevDate; i++) {
    prevMonth.push(i)
  }
}

getPrevMonth()

// 이번달
const getCurrentMonth = () => {
  for (let i = 1; i <= nextDate; i++) {
    nowMonth.push(i)
  }
}

getCurrentMonth()

// 다음달
const getNextMonth = () => {
  for (let i = 1; i <= (7 - nextDay === 0 ? 0 : 7 - nextDay); i++) {
    nextMonth.push(i)
  }
}

getNextMonth()
</script>
<template>
  <div class="flex flex-col items-center space-y-5">
    <div class="flex space-x-8">
      <button>
        <IconArrow />
      </button>
      <div class="font-bold text-lg">2022년 8월</div>
      <button>
        <IconArrow class="rotate-180" />
      </button>
    </div>
    <div class="space-y-3 w-full">
      <div class="grid grid-cols-7 auto-rows-[90px] gap-1">
        <div
          v-for="(day, index) in week"
          :key="index"
          class="border rounded-6 border-green-100 text-center grid place-items-center font-bold"
        >
          {{ day.name }}
        </div>
        <div
          v-for="(day, index) in prevMonth"
          :key="index"
          :class="calendar"
          class="text-gray-300"
        >
          {{ day }}
        </div>
        <div v-for="(day, index) in nowMonth" :key="index" :class="calendar">
          {{ day }}
        </div>
        <div
          v-for="(day, index) in nextMonth"
          :key="index"
          :class="calendar"
          class="text-gray-300"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>
