<script setup lang="ts">
import { toggleTheme } from '@/composables/dark'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-config-provider namespace="ep">
    <header px-4 border-b border-border flex h-12 items-center justify-between>
      <nav class="flex gap-4 items-center">
        <RouterLink to="/" active-class="text-primary">Home</RouterLink>
        <RouterLink to="/about" active-class="text-primary">About</RouterLink>
        <RouterLink to="/blog" active-class="text-primary">Blog</RouterLink>
        <RouterLink to="/data" active-class="text-primary">Data</RouterLink>
      </nav>
      <button
        type="button"
        @click="toggleTheme"
        rounded-lg
        flex
        size-10
        items-center
        justify-center
        hover:cursor-pointer
        class="hover:bg-[--ep-color-primary-light-9]"
      >
        <i class="i-carbon-sun dark:i-carbon-moon text-lg" />
      </button>
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
