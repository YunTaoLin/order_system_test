<template>
  <div class="search-filter">
    <div class="search-filter__row">
      <div class="search-filter__field">
        <span class="search-filter__label">用餐地點</span>
        <a-select
          :value="searchStore.params.location"
          style="width: 140px"
          :options="locationOptions"
          @update:value="(val: string) => searchStore.updateParams({ location: val })"
        />
      </div>

      <div class="search-filter__field">
        <span class="search-filter__label">用餐日期</span>
        <a-date-picker
          :value="searchStore.params.date"
          style="width: 150px"
          @update:value="(val: any) => searchStore.updateParams({ date: val })"
        />
      </div>

      <template v-if="showTimeFields">
        <div class="search-filter__field">
          <span class="search-filter__label">時段</span>
          <a-select
            :value="searchStore.params.timeSlot"
            style="width: 100px"
            :options="timeSlotOptions"
            @update:value="(val: string) => searchStore.updateParams({ timeSlot: val })"
          />
        </div>
        <div class="search-filter__field">
          <span class="search-filter__label">取餐時間</span>
          <a-time-picker
            :value="searchStore.params.pickupTime"
            format="HH:mm"
            style="width: 100px"
            @update:value="(val: any) => searchStore.updateParams({ pickupTime: val })"
          />
        </div>
      </template>

      <div class="search-filter__action">
        <a-button type="primary" ghost @click="$emit('search')">搜尋</a-button>
      </div>
    </div>

    <p v-if="deadlineText" class="search-filter__hint" :class="{ 'search-filter__hint--danger': isDangerHint }">
      {{ deadlineText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores'
import { locationOptions, timeSlotOptions } from '@/config'

interface Props {
  showTimeFields?: boolean
  deadlineText?: string
  isDangerHint?: boolean
}

withDefaults(defineProps<Props>(), {
  showTimeFields: false,
  deadlineText: '',
  isDangerHint: false,
})

defineEmits<{ (e: 'search'): void }>()

const searchStore = useSearchStore()
</script>

<style scoped lang="scss">
.search-filter {
  background: $bg-white;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
  border: 1px solid #f3f4f6;
  padding: 16px;
  margin-bottom: 24px;

  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }

  &__field {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__label {
    color: $text-secondary;
    font-size: 14px;
    white-space: nowrap;
  }

  &__action {
    margin-left: auto;
  }

  &__hint {
    margin-top: 16px;
    margin-bottom: 0;
    font-size: 12px;
    color: $text-secondary;
    line-height: 1.8;
    white-space: pre-line;

    &--danger {
      color: $danger-color;
    }
  }
}
</style>
