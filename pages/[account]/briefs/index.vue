<template>
  <v-card class="mt-6">
    <v-card-title>
      Briefs
    </v-card-title>
    <v-container>
      <v-row>
        <v-col>
          <NuxtLink class="nuxt-link" to="/account-name/briefs/create">
            <v-card color="success">
              <v-card-title>
                Create
              </v-card-title>
              <v-card-text>
                Create a new Brief
                <v-icon>mdi-plus-box</v-icon>
              </v-card-text>
            </v-card>
          </NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink class="nuxt-link" to="/account-name/briefs/list">
            <v-card color="warning">
              <v-card-title>
                View
              </v-card-title>
              <v-card-text>
                View a list of all Briefs
                <v-icon>mdi-table</v-icon>
              </v-card-text>
            </v-card>
          </NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink class="nuxt-link" to="/account-name/briefs/report">
            <v-card color="info">
              <v-card-title>
                Reports
              </v-card-title>
              <v-card-text>
                Generate reports on briefs
                <v-icon>mdi-clipboard-text</v-icon>
              </v-card-text>
            </v-card>
          </NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink class="nuxt-link" to="/account-name/briefs/report">
            <v-card color="info">
              <v-card-title>
                Statistics
              </v-card-title>
              <v-card-text>
                View brief stats
                <v-icon>mdi-chart-areaspline</v-icon>
              </v-card-text>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>