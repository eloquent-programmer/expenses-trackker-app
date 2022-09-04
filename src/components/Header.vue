<template>
  <v-app-bar color="primary">
    <template #prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Expenses Tracker</v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EtHeader',
})
</script>
