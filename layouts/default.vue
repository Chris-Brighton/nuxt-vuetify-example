<template>
  <v-app>
    <v-app-bar elevation="2" density="compact">
      <v-app-bar-nav-icon density="compact" @click.stop="drawer = !drawer"/>
      <v-app-bar-title>
        <NuxtLink to="/">
          Akero v2
        </NuxtLink>
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
      >
      <v-list-item>
        <NuxtLink style="display: block;"  to="/account-name/campaigns">Campaigns</NuxtLink>
      </v-list-item>
      <v-list-item>
        <NuxtLink style="display: block;"  to="/account-name/briefs">Briefs</NuxtLink>
      </v-list-item>
    </v-navigation-drawer>
    <v-main class="px-12">
      <slot/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(null);
</script>