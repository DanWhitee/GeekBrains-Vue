<template>
  <Wrapper>

    <div class="content">
      <div class="content__wrap-input">
        <Input
          @focus="focus"
          v-model.number="firstNumber"
          placeholder="Введите первое число"
        />
        <Input
          @focus="focus"
          v-model.number="secondNumber"
          placeholder="Введите вторе число"
        />
      </div>
      <div class="content__result">
        <h4 class="content__title">Результат: </h4>
        <p class="content__conclusion">{{result}}</p>
      </div>
      <div class="content__list-btn">
        <Btn
          @click="calculator"
          v-for="(item, index) in listBtn"
          :key="index"
        >
          {{item.th}}
        </Btn>
      </div>
      <Keyboard />
    </div>

  </Wrapper>
</template>

<script>
import Input from '@/components/input.vue'
import Btn from '@/components/btn.vue'
import Wrapper from '@/views/calculator/components/centering.vue'
import Keyboard from '@/views/calculator/components/ keyboard.vue'

export default {
  name: 'Calculator',
  components: { Input, Wrapper, Btn, Keyboard },
  data () {
    return {
      firstNumber: '',
      secondNumber: '',
      result: '',
      listBtn: [
        {
          th: '+'
        },
        {
          th: '-'
        },
        {
          th: '*'
        },
        {
          th: '/'
        },
        {
          th: '**'
        }
      ]
    }
  },
  methods: {
    calculator (e) {
      let symbol = e.innerText
      if (symbol) {
        if(symbol == '+') this.result = this.firstNumber + this.secondNumber
        if(symbol == '-') this.result = this.firstNumber - this.secondNumber
        if(symbol == '/') this.result = this.firstNumber / this.secondNumber
        if(symbol == '*') this.result = this.firstNumber * this.secondNumber
        if(symbol == '**') this.result = this.firstNumber ** this.secondNumber
      }
    },

    focus () {
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  &__wrap-input {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  &__result {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    margin-top: 15px;
  }

  &__conclusion {
    margin: 15px 0;
  }

  &__list-btn {
    display: flex;
    justify-content: center;
  }
}


</style>