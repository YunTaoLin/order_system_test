<template>
  <div class="meal-card" :style="cardStyle">
    <div class="meal-card__info">
      <h4 class="meal-card__period">{{ meal.period }}</h4>
      <p class="meal-card__desc">{{ meal.description }}</p>
    </div>
    <div class="meal-card__control">
      <NumberControl :model-value="count" @update:model-value="$emit('update:count', $event)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BuffetMeal } from '@/types'
import { mealColorMap } from '@/config'
import { NumberControl } from '@/components'

interface Props {
  meal: BuffetMeal
  count: number
}

const props = defineProps<Props>()
defineEmits<{ (e: 'update:count', value: number): void }>()

const cardStyle = computed(() => {
  const scheme = mealColorMap[props.meal.colorScheme] || mealColorMap.yellow
  return {
    backgroundColor: scheme.bg,
    borderColor: scheme.border,
  }
})
</script>

<style scoped lang="scss">
.meal-card {
  border: 1px solid;
  border-radius: $radius-md;
  padding: 16px;
  width: 288px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: $shadow-sm;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: $shadow-md;
  }

  &__period {
    color: $info-color;
    font-weight: 500;
    font-size: 14px;
    margin: 0 0 8px;
  }

  &__desc {
    color: $text-color;
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }

  &__control {
    margin-top: 16px;
    align-self: flex-end;
  }
}
</style>
