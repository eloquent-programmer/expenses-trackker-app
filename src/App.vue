<template>
  <v-app>
    <et-header />
  </v-app>
</template>

<script lang="ts">
import EtHeader from '@/components/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    EtHeader,
  },
})
</script>
