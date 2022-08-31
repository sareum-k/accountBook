import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import './style.css'
import App from './App.vue'
import router from './router/router'

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:5173',
  // uri: 'https://rickandmortyapi.com/graphql/',
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router).mount('#app')
