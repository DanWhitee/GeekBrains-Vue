<template>
  <div class="keyboard">

    <div class="controls">
      <Btn @click="activeKeyboard = true" md>
        Вкл keyboard
      </Btn>
      <Btn @click="activeKeyboard = false" md>
        Выкл keyboard
      </Btn>
    </div>
    
    <div v-show="activeKeyboard" class="keyboard-body">
      <Btn
        v-for="(item, index) in arrayNumber"
        @click="$emit('number', +item.num)"
        :key="index"
      >
        {{item.num}}
      </Btn>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/btn.vue'

export default {
  name: 'Keyboard',
  components: { Btn },
  data () {
    return {
      activeKeyboard: true,
      arrayNumber: [
        {
          num: '0'
        },
        {
          num: '1'
        },
        {
          num: '2'
        },
        {
          num: '3'
        },
        {
          num: '4'
        },
        {
          num: '5'
        },
        {
          num: '6'
        },
        {
          num: '7'
        },
        {
          num: '8'
        },
        {
          num: '9'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.keyboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
}

.keyboard-body {
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: space-evenly;
}

.controls {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}
</style>
