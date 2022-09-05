<template>
  <v-app-bar color="primary">
    <template #prepend>
      <v-app-bar-nav-icon @click="navClicked"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Expenses Tracker</v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
const emits = defineEmits(['nav-clicked'])
const navClicked = () => {
  emits('nav-clicked')
}
</script>
