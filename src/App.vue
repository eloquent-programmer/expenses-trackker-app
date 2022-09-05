<template>
  <v-app>
    <et-header @nav-clicked="onNavClicked" />
    <et-side-navigation :is-open="isOpen" />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import EtHeader from '@/components/EtHeader.vue'
import EtSideNavigation from '@/components/EtSideNavigation.vue'

const isOpen = ref(true)

const onNavClicked = () => {
  isOpen.value = !isOpen.value
}
</script>
