<script setup lang="ts">
export interface NavItem {
  name: string
  link: string
}

const navItem: NavItem[] = [
  { name: '🗓 캘린더', link: '/calendar/indexCalendar' },
  { name: '💸 가계부', link: '/accountbook/indexaccountbook' },
  { name: '🏅 목표달성', link: '/goal/indexGoal' },
]
</script>
<template>
  <div class="w-min-full">
    <div
      class="bg-green-100 w-full px-10 py-5 flex justify-between items-center shadow-md"
    >
      <RouterLink :to="'/indexHome'" class="font-bold text-2xl text-yellow-100"
        >bubu가계부</RouterLink
      >
      <ul class="flex space-x-10">
        <li v-for="(menu, index) in navItem" :key="index">
          <RouterLink :to="`${menu.link}`" class="text-yellow-100">
            {{ menu.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="p-10">
      <RouterView />
    </div>
  </div>
</template>
