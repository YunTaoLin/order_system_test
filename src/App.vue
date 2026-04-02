<template>
  <a-config-provider :theme="themeConfig">
    <a-tabs
      :active-key="currentTab"
      :tab-bar-style="{ paddingTop: '16px' }"
      @change="handleTabChange"
    >
      <a-tab-pane
        v-for="tab in navTabsConfig"
        :key="tab.key"
        :tab="tab.label"
        :disabled="tab.disabled"
      />
    </a-tabs>

    <main class="page-container">
      <router-view />
    </main>
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { navTabsConfig } from '@/config'

const route = useRoute()
const router = useRouter()

const themeConfig = {
  token: {
    colorPrimary: '#2dd4bf',
    borderRadius: 8,
  },
}

const currentTab = computed(() => {
  const path = route.path
  const matched = navTabsConfig.find(t => t.path === path)
  return matched?.key || 'buffet'
})

function handleTabChange(key: string) {
  const tab = navTabsConfig.find(t => t.key === key)
  if (tab && !tab.disabled) {
    router.push(tab.path)
  }
}
</script>
