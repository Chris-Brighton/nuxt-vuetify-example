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
        <v-card variant="flat" title="User Name" append-icon="mdi-account">
          <v-card-subtitle class="mb-2">
            account name
          </v-card-subtitle>
        </v-card>
      </v-list-item>
      <v-divider/>
      <v-list-item>
        <NuxtLink to="/account-name/campaigns" class="nuxt-link">
          <v-card color="primary" variant="flat">
            <v-card-title class="d-flex">
              Campaigns
              <v-icon icon="mdi-package-variant" class="ml-auto"/>
            </v-card-title>
            <v-card-subtitle class="mb-2">
              campaigns subtext
            </v-card-subtitle>
          </v-card>
        </NuxtLink>
      </v-list-item>
      <v-list-item>
        <NuxtLink  to="/account-name/briefs" class="nuxt-link">
          <v-card color="secondary" variant="flat">
            <v-card-title class="d-flex">
              Briefs
              <v-icon icon="mdi-animation" class="ml-auto"/>
            </v-card-title>
            <v-card-subtitle class="mb-2">
              briefs subtext
            </v-card-subtitle>
          </v-card>
        </NuxtLink>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <slot/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref(null);
</script>

<style>
.nuxt-link {
  text-decoration: unset;
}
</style>