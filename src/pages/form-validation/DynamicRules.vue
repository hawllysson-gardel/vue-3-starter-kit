<script setup>
import { reactive, computed } from 'vue';

import { useVuelidate } from '@vuelidate/core';
import { required, minLength, requiredIf } from '@vuelidate/validators';

const state = reactive({
  form: {
    firstField: '',
    secondField: '',
    thirdField: '',
  },
  thirdRules: [],
});

const rules = computed(() => {
  const localRules = {
    form: {
      firstField: { required },
      secondField: { requiredIfFormFirstField: requiredIf(state.form.firstField === 'volvo') },
      thirdField: { ...state.thirdRules },
    },
  };

  return localRules;
});

const v$ = useVuelidate(rules, state);

const changeSecondField = (event) => {
  if (event.target.value.length > 1) {
    state.thirdRules = [required, minLength(2)];
  } else {
    state.thirdRules = [];
  }
};

const submit = async () => {
  await v$.value.$validate();
};
</script>

<template>
  <form>
    <div class="tw-font-bold">Dynamic Rules</div>

    <div>
      <label for="cars">Choose a car:</label>
      <select id="cars" v-model="state.form.firstField" name="cars" class="tw-border">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <div v-for="error of v$.form.firstField.$errors" :key="error.$uid" class="tw-text-red-500">
        {{ error.$message }}
      </div>
    </div>

    <div>
      <label for="des">Second Field:</label>
      <input
        id="dynamicRules-secondField"
        v-model="state.form.secondField"
        type="text"
        class="tw-border"
        @input="changeSecondField"
      />
      <div v-for="error of v$.form.secondField.$errors" :key="error.$uid" class="tw-text-red-500">
        {{ error.$message }}
      </div>
    </div>

    <div>
      <label for="des">Third Field:</label>
      <input
        id="dynamicRules-thirdField"
        v-model="state.form.thirdField"
        type="text"
        class="tw-border"
      />
      <div v-for="error of v$.form.thirdField.$errors" :key="error.$uid" class="tw-text-red-500">
        {{ error.$message }}
      </div>
    </div>

    <div>
      <button
        type="button"
        class="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-1 tw-rounded"
        @click="submit"
      >
        Submit
      </button>
    </div>
  </form>
</template>
