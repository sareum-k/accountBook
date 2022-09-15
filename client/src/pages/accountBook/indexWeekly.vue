<script setup lang="ts">
import { ref } from 'vue'

import IconArrow from '@/components/icon/IconArrow.vue'
import MiddleRow from '@/components/row/MiddleRow.vue'
import DoughnutChart from '@/components/chart/DoughnutChart.vue'

export interface Selected {
  name: string
  value: string
}

export interface SelectedColor {
  name: string
  color: string
}

const selectedValue = ref<string>('category')
const categoryColors = ref<string[]>([])
const paymentColors = ref<string[]>([])
const partColors = ref<string[]>([])
const vsColors = ref<string[]>([])

const chartData = {
  total: 1000,
  data: [10, 20, 50, 200, 350, 100, 200],
}

const selectedList: Selected[] = [
  {
    name: '카테고리',
    value: 'category',
  },
  {
    name: '결제방법',
    value: 'payment',
  },
  {
    name: '담당',
    value: 'part',
  },
  {
    name: '수입지출',
    value: 'vs',
  },
]

const category: SelectedColor[] = [
  {
    name: '식비',
    color: '#b9fbc0',
  },
  {
    name: '교통비',
    color: '#98f5e1',
  },
  {
    name: '문화생활',
    color: '#8eecf5',
  },
  {
    name: '생필품',
    color: '#90dbf4',
  },
  {
    name: '의류',
    color: '#a3c4f3',
  },
  {
    name: '미용',
    color: '#ff97b7',
  },
  {
    name: '의료/건강',
    color: '#f1c0e8',
  },
  {
    name: '교육',
    color: '#ffcfd2',
  },
  {
    name: '통신비',
    color: '#fde4cf',
  },
  {
    name: '회비',
    color: '#fbf8cc',
  },
  {
    name: '경조사',
    color: '#cfbaf0',
  },
  {
    name: '저축',
    color: '#f4978e',
  },
  {
    name: '가전',
    color: '#72ddf7',
  },
  {
    name: '공과금',
    color: '#84dcc6',
  },
]

const payment: SelectedColor[] = [
  {
    name: '신용카드',
    color: '#70d6ff',
  },
  {
    name: '체크카드',
    color: '#ffd670',
  },
  {
    name: '포인트',
    color: '#ff9770',
  },
  {
    name: '현금',
    color: '#ff70a6',
  },
]

const part: SelectedColor[] = [
  {
    name: '나',
    color: '#ffa69e',
  },
  {
    name: '남편',
    color: '#93e1d8',
  },
  {
    name: '공용',
    color: '#f3d8c7',
  },
]

const versus: SelectedColor[] = [
  {
    name: '지출',
    color: '#bbefa9',
  },
  {
    name: '수입',
    color: '#ffa8d9',
  },
]

const colorFilter = () => {
  if (selectedValue.value === 'category') {
    for (let i = 0; i < category.length; i++) {
      categoryColors.value.push(category[i].color)
    }
  } else if (selectedValue.value === 'payment') {
    for (let i = 0; i < payment.length; i++) {
      paymentColors.value.push(payment[i].color)
    }
  } else if (selectedValue.value === 'part') {
    for (let i = 0; i < part.length; i++) {
      partColors.value.push(payment[i].color)
    }
  } else if (selectedValue.value === 'vs') {
    for (let i = 0; i < versus.length; i++) {
      vsColors.value.push(payment[i].color)
    }
  }
}

colorFilter()

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
}

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

  let startDay = new Date(currentYear.value, currentMonth.value, 0)
  let prevDay = startDay.getDay()

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
  <div class="flex justify-evenly items-start">
    <div class="w-1/2 space-y-5">
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
    <div class="w-1/3 flex flex-col justify-center items-center">
      <select
        v-model="selectedValue"
        class="border border-green-900 rounded-6 px-2 py-1 text-sm w-full"
        name="type"
        @change="colorFilter"
      >
        <option
          v-for="(item, index) in selectedList"
          :key="index"
          :value="item.value"
        >
          {{ item.name }}
        </option>
      </select>
      <template v-if="selectedValue === 'category'">
        <div class="flex flex-col items-center">
          <div class="w-72">
            <DoughnutChart
              :data="chartData"
              :base-color="'#E4F6E5'"
              :colors="categoryColors"
            />
          </div>
          <div class="grid grid-cols-4 w-ful gap-x-1 gap-y-2">
            <div
              v-for="(item, index) in category"
              :key="index"
              class="text-xs flex items-center"
            >
              <div
                class="w-4 h-4 mr-1 rounded-10"
                :style="{ background: item.color }"
              ></div>
              {{ item.name }} 28%
            </div>
          </div>
        </div>
      </template>
      <template v-if="selectedValue === 'payment'">
        <div class="flex flex-col items-center">
          <div class="w-72">
            <DoughnutChart
              :data="chartData"
              :base-color="'#E4F6E5'"
              :colors="paymentColors"
            />
          </div>
          <div class="grid grid-cols-4 w-ful gap-x-2 gap-y-2">
            <div
              v-for="(item, index) in payment"
              :key="index"
              class="text-xs flex items-center"
            >
              <div
                class="w-4 h-4 mr-1 rounded-10"
                :style="{ background: item.color }"
              ></div>
              {{ item.name }} 28%
            </div>
          </div>
        </div>
      </template>
      <template v-if="selectedValue === 'part'">
        <div class="flex flex-col items-center">
          <div class="w-72">
            <DoughnutChart
              :data="chartData"
              :base-color="'#E4F6E5'"
              :colors="partColors"
            />
          </div>
          <div class="grid grid-cols-3 w-ful gap-x-2 gap-y-2">
            <div
              v-for="(item, index) in part"
              :key="index"
              class="text-xs flex items-center"
            >
              <div
                class="w-4 h-4 mr-1 rounded-10"
                :style="{ background: item.color }"
              ></div>
              {{ item.name }} 28%
            </div>
          </div>
        </div>
      </template>
      <template v-if="selectedValue === 'vs'">
        <div class="flex flex-col items-center">
          <div class="w-72">
            <DoughnutChart
              :data="chartData"
              :base-color="'#E4F6E5'"
              :colors="vsColors"
            />
          </div>
          <div class="grid grid-cols-2 w-ful gap-x-2 gap-y-2">
            <div
              v-for="(item, index) in versus"
              :key="index"
              class="text-xs flex items-center"
            >
              <div
                class="w-4 h-4 mr-1 rounded-10"
                :style="{ background: item.color }"
              ></div>
              {{ item.name }} 28%
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
