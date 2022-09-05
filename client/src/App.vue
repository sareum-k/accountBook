<script setup lang="ts">
import HeaderNavbar from './components/layout/HeaderNavbar.vue'

// import gql from 'graphql-tag'
// import { useQuery } from '@vue/apollo-composable'

// const characters = gql`
//   query {
//     characters(page: 2, filter: { name: "rick" }) {
//       info {
//         count
//       }
//       results {
//         name
//       }
//     }
//     location(id: 1) {
//       id
//     }
//     episodesByIds(ids: [1, 2]) {
//       id
//     }
//   }
// `

// const { result, loading, error } = useQuery(characters)
</script>

<template>
  <HeaderNavbar />
</template>

<style scoped></style>
