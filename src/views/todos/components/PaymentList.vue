<template>
  <div class="payments">
    <ul class="payments-header">
      <li class="payments-header__list">#</li>
      <li class="payments-header__list">Date</li>
      <li class="payments-header__list">Categor</li>
      <li class="payments-header__list">Value</li>
    </ul>
    <ul v-for="(item, index) in paymentList" :key="index" class="payments-list">
      <li class="payments-list__item">{{ index + 1 }}</li>
      <li class="payments-list__item">{{ item.date }}</li>
      <li class="payments-list__item">{{ item.category }}</li>
      <li class="payments-list__item">{{ item.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaymentList",
  props: {
    paymentList: {
      type: Array,
      require: false,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.payments {
   flex: 1 1 auto;
   padding: 20px;
   border: 1px solid #dee2e6;
   border-radius: 10px;
   margin-top: 20px;
   box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

   margin-bottom: 10px;

   &-header {
      display: flex;
      padding-bottom: 10px;
      border-bottom: 1px solid #000;

      &__list {
         display: flex;
         justify-content: center;
         flex: 1 1 25%;
         font-size: 17px;
         font-weight: 500;
      }
   } 

   &-list {
      display: flex;
      margin-top: 20px;
      
      &__item {
         display: flex;
         justify-content: center;
         flex: 1 1 25%;
      }
   }
}

</style>
