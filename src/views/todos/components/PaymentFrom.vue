<template>
  <form class="form">
    <h2 class="form__title">Personal costs</h2>
    <fieldset class="form-block">
      <label class="form-label">
        <h3 class="form-label__title">Date</h3>
        <input
          v-model="date"
          class="form-label__input"
          type="text"
          placeholder="Payment date"
        />
      </label>
      <label class="form-label">
        <h3 class="form-label__title">Category</h3>
        <input
          v-model="category"
          class="form-label__input"
          type="text"
          placeholder="Payment category"
        />
      </label>
      <label class="form-label">
        <h3 class="form-label__title">Value</h3>
        <input
          v-model="value"
          class="form-label__input"
          type="text"
          placeholder="Payment value"
        />
      </label>
      <button @click.prevent="addPayments()" class="form__btn">
        Add &emsp; +
      </button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "PaymentFrom",
  data() {
    return {
      value: "",
      category: "",
      date: "",
    };
  },

  methods: {
    addPayments() {
      const { category, value } = this;
      const data = {
        date: this.date || this.getCurrentDate,
        category,
        value,
      };

      this.$emit("addNewPaymen", data);
    },
  },

  computed: {
    getCurrentDate() {
      const d = new Date().getDate();
      const m = new Date().getMonth() + 1;
      const y = new Date().getFullYear();

      return `${d}.${m}.${y}`;
    },
  },
};
</script>

<style scoped lang="scss">
.form {
   max-width: 700px;
   width: 100%;
   padding: 20px;
   border: 1px solid #dee2e6;
   border-radius: 10px;
   box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
   background-color: #fff;
 
   &-block {
     display: flex;
     flex-direction: column;
 
     border: none;
     padding: 0;
     margin: 0;
   }

   &__btn {
      font-weight: 400;
      padding: 5px;
      border-radius: 10px;
      color: #fff;
      max-width: 90px;
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
 
 .form-label {
   width: 100%;
   margin-bottom: 20px;

   &:first-child {
      margin-top: 10px;
   }

   &__title {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 5px;
   }
 
   &__input {
     width: 100%;
     padding: 10px 5px 10px 10px;
     border: 1px solid #ced4da;
     background-color: #e1e4e7;
     border-radius: 9px;
     box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);


     &::placeholder {
      color:#000;
      opacity: 0.5;
     }
   }
 }
</style>
