<script setup lang="tsx">
import { theme, toggleTheme } from '@/composables/dark'
import { h } from 'vue'

const open = () => {
  ElMessage('This is a message.')
  ElNotification({
    title: 'Notification',
    message: 'This is a notification.',
  })
}
</script>

<template>
  <main>
    <div class="p-4">
      <div class="flex gap-4">
        <h1 class="text-primary">element plus</h1>
        <el-button @click="open">hello element plus</el-button>
      </div>
      <div class="mt-4 flex flex-wrap gap-4 hover:cursor-pointer">
        <el-button>Button</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button type="info">Info</el-button>
        <el-button :bg="true" type="text">Bg</el-button>
        <el-button :bg="false" type="text">Bg</el-button>
        <el-button type="text">Text</el-button>
      </div>
      <div mt-4 flex gap-4 items-center justify-center>
        <el-button @click="toggleTheme">
          {{ theme }}
        </el-button>
        <el-button
          :icon="
            h('div', { class: 'i-carbon-sun dark:i-carbon-moon text-lg hover:cursor-pointer' })
          "
        />
      </div>
    </div>
  </main>
</template>
