<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider namespace="ep">
    <header class="">
      <nav class="flex gap-4 items-center">
        <RouterLink to="/" active-class="text-primary">Home</RouterLink>
        <RouterLink to="/about" active-class="text-primary">About</RouterLink>
      </nav>
    </header>

    <main class="relative">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 -translate-x-2"
          enter-to-class="opacity-100"
          leave-active-class="transition-all duration-500"
          leave-from-class="opacity-100 "
          leave-to-class="opacity-0 -translate-x-2"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </el-config-provider>
</template>

<style scoped></style>
