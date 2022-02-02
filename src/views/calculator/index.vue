<template>
<section>
  <Btn @click="$router.push({name: 'todos'})" class="todos">
    Todos
  </Btn>
  
  <Wrapper v-if="1">

    <div class="content">
      <div class="content__wrap-input">
        <Input
          @focus="focus"
          v-model="firstNumber"
          :name="'input1'"
          :class="{'shadow' : focus1 === true}"
          placeholder="Введите первое число"
        />
        <Input
          @focus="focus"
          v-model="secondNumber"
          :class="{'shadow' : focus2 === true}"
          :name="'input2'"
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
      <Keyboard @number="valueInput" />
    </div>

  </Wrapper>
</section>
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
      focus1: true,
      focus2: false,
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

    valueInput (e) {
      if (this.focus1) {
        let num = this.firstNumber
        this.firstNumber = Number(`${num}${e}`)
      }

      if (this.focus2) {
        let num = this.secondNumber
        this.secondNumber = Number(`${num}${e}`)
      }
    },

    focus (e) {
      let input = e.getAttribute('name')
      if (input == 'input1') {
        this.focus1 = true
        this.focus2 = false
      } else {
        this.focus1 = false
        this.focus2 = true
      }
    }
  },
  watch: {
    firstNumber () {
      this.innertext
    }
  },
  computed: {
    innertext () {
      return this.firstNumber
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

.shadow {
  -webkit-box-shadow: 0px 0px 23px 8px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 23px 8px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 23px 8px rgba(34, 60, 80, 0.2);
}

.todos {
  position: relative;
  z-index: 10000;

  padding: 30px;
  cursor: pointer;
  background-color: #fff;
  margin: 10px;
}
</style>