<template>
  <button
    class="btn"
    :class="{
      'btn--sm': sm === true,
      'btn--md': md === true
    }"
    type="button"
    @click="$emit('click', $event.target)"
  >
  <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    sm: {
      type: Boolean,
      default: true
    },
    md: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  border: 2px solid #e6e6ee;

  display: flex;
  justify-content: center;
  align-items: center;

  &--sm {
    padding: 5px;
    width: 30px;
    height: 30px;
  }

  &--md {
    width: 100%;
  }
}
</style>
