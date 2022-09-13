<script setup lang="ts">
import { useRoute } from 'vue-router'

import LeftSidebar from './LeftSidebar.vue'

export interface NavItem {
  name: string
  link: string
  linkName: string
}

const navItem: NavItem[] = [
  {
    name: '💸 가계부',
    link: '/accountbook/indexMonthly',
    linkName: 'accountBook-indexMonthly',
  },
  {
    name: '🏅 목표달성',
    link: '/goal/indexGoal',
    linkName: 'goal-indexGoal',
  },
]

const sideItem: NavItem[] = [
  {
    name: '월간',
    link: '/accountbook/indexMonthly',
    linkName: 'accountBook-indexMonthly',
  },
  {
    name: '주간',
    link: '/accountbook/indexWeekly',
    linkName: 'accountBook-indexWeekly',
  },
  {
    name: '일간',
    link: '/accountbook/indexDaily',
    linkName: 'accountBook-indexDaily',
  },
]

const route = useRoute()
const active = 'text-green-900'
const inactive = 'text-yellow-100'
</script>
<template>
  <div class="w-min-full">
    <div
      class="bg-green-100 w-full px-10 py-5 flex justify-between items-center"
    >
      <RouterLink :to="'/indexHome'" class="font-bold text-2xl text-yellow-100"
        >bubu가계부</RouterLink
      >
      <ul class="flex space-x-10">
        <li v-for="(menu, index) in navItem" :key="index">
          <RouterLink
            :to="`${menu.link}`"
            class="font-semibold"
            :class="menu.linkName === route.name ? active : inactive"
          >
            {{ menu.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="grid grid-flow-col grid-cols-[5rem]">
      <template
        v-if="
          route.name === 'accountBook-indexMonthly' ||
          route.name === 'accountBook-indexWeekly' ||
          route.name === 'accountBook-indexDaily'
        "
      >
        <LeftSidebar :side-item="sideItem" />
        <div class="p-10">
          <RouterView />
        </div>
      </template>
    </div>
  </div>
</template>
