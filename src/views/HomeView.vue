<script setup lang="ts">
import { ElLoading, ElMessage, ElNotification } from 'element-plus'

const open = () => {
  ElMessage('This is a message.')
  ElNotification({
    title: 'Notification',
    message: 'This is a notification.',
  })
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
const theme = computed(() => (isDark.value ? 'dark' : 'light'))

const isLoading = ref(false)
const toggleTheme = () => {
  isLoading.value = true
  setTimeout(() => {
    toggleDark()
    isLoading.value = false
  }, 1000)
}

const toggleTheme2 = () => {
  const loading = ElLoading.service()
  setTimeout(() => {
    toggleDark()
    loading.close()
  }, 1000)
}
</script>

<template>
  <main>
    <div class="p-4">
      <div class="flex gap-4">
        <h1 class="text-primary">element plus</h1>
        <el-button @click="open">hello element plus</el-button>
      </div>
      <div class="mt-4 flex flex-wrap gap-4">
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
      <div class="mt-4 flex justify-center">
        <el-button
          v-loading.fullscreen="isLoading"
          element-loading-text="Loading..."
          @click="toggleTheme"
        >
          {{ theme }}
        </el-button>
        <el-button @click="toggleTheme2"> {{ theme }} 2 </el-button>
      </div>
    </div>
  </main>
</template>
