<template>
  <h1>
    Index.vue
  </h1>
  <h2>Tech Used</h2>
  <v-list>
    <v-list-item>
      <NuxtLink to="https://nuxt.com/" target="_blank">Nuxt 3</NuxtLink>
    </v-list-item>
    <v-list-item>
      <NuxtLink to="https://vuetifyjs.com/en/" target="_blank">Vuetify</NuxtLink>
    </v-list-item>
  </v-list>
  <v-card>
    <v-list>
      <v-list-item>
        <v-btn color="primary">
          Primary
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn color="secondary">
          Secondary
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn color="info">
          Info
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn color="success">
          Success
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn color="warning">
          Warning
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn color="error">
          Error
        </v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>