<template>
  <v-navigation-drawer :model-value="isOpen" temporary>
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Dashboard"
        value="dashboard"
        to="/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-cash"
        title="New Budget"
        value="newBudget"
        to="/budget"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>()
</script>
