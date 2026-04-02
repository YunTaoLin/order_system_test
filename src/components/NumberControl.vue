<template>
  <div class="number-control" @click.stop>
    <button class="number-control__btn number-control__btn--minus" @click="decrease">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14" />
      </svg>
    </button>
    <span class="number-control__value">{{ modelValue }}</span>
    <button class="number-control__btn number-control__btn--plus" @click="increase">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5v14" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: number
  min?: number
  max?: number
}

interface Emits {
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 99,
})

const emit = defineEmits<Emits>()

function decrease() {
  if (props.modelValue > props.min) {
    const next = props.modelValue - 1
    emit('update:modelValue', next)
    emit('change', next)
  }
}

function increase() {
  if (props.modelValue < props.max) {
    const next = props.modelValue + 1
    emit('update:modelValue', next)
    emit('change', next)
  }
}
</script>

<style scoped lang="scss">
.number-control {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: $bg-white;
  border: 1px solid $border-color;
  border-radius: 999px;
  padding: 4px 8px;
  box-shadow: $shadow-sm;
  user-select: none;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s;

    svg {
      width: 16px;
      height: 16px;
    }

    &--minus {
      color: $text-muted;
      &:hover { color: $text-color; }
    }

    &--plus {
      color: $info-color;
      &:hover { color: #2563eb; }
    }
  }

  &__value {
    width: 16px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: $text-color;
  }
}
</style>
