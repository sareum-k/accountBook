<script setup lang="ts">
import { ref } from 'vue'
import IconArrow from '@/components/icon/IconArrow.vue'
import SmallRow from '@/components/row/smallRow.vue'

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

const props = withDefaults(
  defineProps<{
    thisMonth: Date
    today: Date
    dayWithdraw: number
    dayDeposit: number
  }>(),
  {
    dayWithdraw: 0,
    dayDeposit: 0,
  }
)

const calendar =
  'border rounded-6 border-green-100 text-center grid place-items-start p-2'

const currentYear = ref<number>(props.thisMonth.getFullYear())
const currentMonth = ref<number>(props.thisMonth.getMonth())
const currentDate = ref<number>(props.thisMonth.getDate())

const prevMonth = ref<number[]>([])
const nowMonth = ref<number[]>([])
const nextMonth = ref<number[]>([])

const changeMonth = ref<Date>(new Date())

const rerenderCalendar = (thisMonth: Date) => {
  currentYear.value = thisMonth.getFullYear()
  currentMonth.value = thisMonth.getMonth()
  currentDate.value = thisMonth.getDate()

  // 이전 달의 마지막 날 날짜와 요일 구하기
  let startDay = new Date(currentYear.value, currentMonth.value, 0)
  let prevDate = startDay.getDate()
  let prevDay = startDay.getDay()

  // 이번 달의 마지막 날 날짜와 요일 구하기
  let endDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  let nextDate = endDay.getDate() // 30
  let nextDay = endDay.getDay() // 5

  const getPrevMonth = () => {
    prevMonth.value = []
    for (let i = prevDate - prevDay + 1; i <= prevDate; i++) {
      prevMonth.value.push(i)
    }
  }
  getPrevMonth()

  const getCurrentMonth = () => {
    nowMonth.value = []
    for (let i = 1; i <= nextDate; i++) {
      nowMonth.value.push(i)
    }
  }
  getCurrentMonth()

  const getNextMonth = () => {
    nextMonth.value = []
    for (let i = 1; i <= (7 - nextDay === 0 ? 0 : 7 - nextDay); i++) {
      nextMonth.value.push(i)
    }
  }
  getNextMonth()
}

rerenderCalendar(props.thisMonth)

const movePrevMonth = () => {
  changeMonth.value = new Date(currentYear.value, currentMonth.value - 1, 1)
  rerenderCalendar(changeMonth.value)
}

const moveNextMonth = () => {
  changeMonth.value = new Date(currentYear.value, currentMonth.value + 1, 1)
  rerenderCalendar(changeMonth.value)
}
</script>
<template>
  <div class="flex flex-col items-center space-y-5">
    <div class="flex space-x-8">
      <button type="button" @click="movePrevMonth">
        <IconArrow />
      </button>
      <div class="font-bold text-lg w-28 text-center">
        {{ currentYear }}년 {{ currentMonth + 1 }}월
      </div>
      <button>
        <IconArrow class="rotate-180" type="button" @click="moveNextMonth" />
      </button>
    </div>
    <div class="space-y-3 w-full">
      <div class="grid grid-cols-7 auto-rows-[80px] gap-1">
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
        <div
          v-for="(day, index) in nowMonth"
          :key="index"
          class="border rounded-6 border-green-100 text-center grid place-items-start py-1 px-2"
          :class="
            today.getDate() === day && currentMonth === today.getMonth()
              ? 'text-green-900 font-semibold'
              : ''
          "
        >
          {{ day }}
          <SmallRow :day-withdraw="dayWithdraw" :day-deposit="dayDeposit" />
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
