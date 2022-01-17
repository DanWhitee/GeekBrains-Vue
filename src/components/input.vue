<template>
  <div class="wrapper">
    <input
      class="input"
      type="text"
      :name="name"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target)"
      :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: 'Input',
  props:  {
    placeholder: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    modal: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10px 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
}

.input {
  border: none;
  width: 100%;

  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
  }
}
</style>
