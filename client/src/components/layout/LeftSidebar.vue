<script setup lang="ts">
import { useRoute } from 'vue-router'

import { NavItem } from '@/components/layout/HeaderNavbar.vue'

withDefaults(
  defineProps<{
    sideItem: NavItem[]
  }>(),
  {}
)

const route = useRoute()
const active = 'bg-yellow-500 text-green-900 font-bold'
const inactive = 'text-green-100'
</script>
<template>
  <ul>
    <li
      v-for="(menu, index) in sideItem"
      :key="index"
      class="grid auto-rows-[15.1rem] place-items-center border border-yellow-500 text-lg"
      :class="menu.linkName === route.name ? active : inactive"
    >
      <RouterLink :to="`${menu.link}`">
        {{ menu.name }}
      </RouterLink>
    </li>
  </ul>
</template>
