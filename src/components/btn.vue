<template>
  <button
    class="btn"
    type="button"
    @click="$emit('click', $event.target)"
  >
  <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn'
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  padding: 5px;
  width: 30px;
  height: 30px;
  border: 2px solid #e6e6ee;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
