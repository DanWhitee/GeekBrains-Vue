<template>
  <section class="costs">
    <div class="costs-header">
      <h1 class="costs-header__title">My personal costs</h1>
      <button @click="activeBtn = !activeBtn" class="costs-header__btn">
        add new costs &emsp; {{ activeBtn ? "⇐" : "⇒" }}
      </button>
    </div>
    <PaymentFrom
      :style="styleform"
      class="input-form"
      @addNewPaymen="fetchPayment"
    />

    <PaymentList :paymentList="paymentsList" />
  </section>
</template>

<script>
import PaymentFrom from "./components/PaymentFrom.vue";
import PaymentList from "./components/PaymentList";

export default {
  name: "MyPersonalCosts",
  components: {
    PaymentFrom,
    PaymentList,
  },
  data() {
    return {
      activeBtn: false,
      paymentsList: [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.11.2020",
          category: "Food",
          value: 532,
        },
      ],
    };
  },
  methods: {
    fetchPayment(dataItem) {
      let filterArr = [];
      filterArr.push(dataItem);
      filterArr.filter((item) => {
        if (item.category !== "" && item.value !== "") {
          this.paymentsList.push(item);
        }
      });
    },
  },
  computed: {
    styleform() {
      let style = null;
      if (this.activeBtn) {
        style = { left: "50%" };
      }
      return style;
    },
  },
};
</script>

<style scoped lang="scss">
.costs {
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;

    padding: 20px;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    

    &__btn {
      text-transform: uppercase;
      cursor: pointer;
      font-weight: 400;
      padding: 9px 5px;
      border-radius: 10px;
      color: #fff;
      max-width: 200px;
      border: none;
      background-color: #0d6efd;
      transition: background-color 0.3s;
      cursor: pointer;
      box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   
      &:hover {
       background-color: #1163df;
      }
    }
  }
}

.input-form {
  position: absolute;
  left: -100%;
  top: 20%;
  transform: translate(-50%, -20%);
  z-index: 1000;
  transition: left 0.5s;

}
</style>

