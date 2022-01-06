<template>
  <section class="centering">
    <div class="centering__body">

      <transition name="fade">
        <div v-if="hidden" class="centering__content">
          <slot/>
        </div>
      </transition>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Centering',
  data () {
    return {
      hidden: false
    }
  },
  mounted () {
    this.hidden = true
  }
}
</script>

<style lang="scss" scoped>
.centering {
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 15px;

  width: 100%;
  height: 100%;

  background: rgba(93, 119, 255, 0.9);
  backdrop-filter: blur(3px);

  overflow-y: auto;
  overflow-x: hidden;

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100%;
  }

  &__content {
    max-width: 605px;
    width: 100%;
    padding: 24px;
    background-color: #fff;
    border-radius: 5px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
