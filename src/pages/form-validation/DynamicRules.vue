<script setup>
import { reactive, computed } from 'vue';
import { useValidator, useValidation } from 'vue-formor';

const state = reactive({
  form: {
    firstField: '',
    secondField: '',
    thirdField: '',
  },
  thirdRules: [],
  errors: {},
});

const validator = useValidator();

const validation = useValidation(
  [
    [computed(() => state.form.firstField), [validator.required]],
    [
      computed(() => state.form.secondField),
      computed(() => (state.form.firstField === 'volvo' ? [validator.required] : [])),
    ],
    [computed(() => state.form.thirdField), computed(() => state.thirdRules)],
  ],
  state,
);

const changeSecondField = (event) => {
  if (event.target.value.length > 1) {
    state.thirdRules = [validator.required, validator.minLength(2)];
  } else {
    state.thirdRules = [];
  }
};

const submit = () => {
  if (validation.validate()) {
    console.log('Submit');
  }
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
      <div class="tw-text-red-500">{{ state.errors['form.firstField'] }}</div>
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
      <div class="tw-text-red-500">{{ state.errors['form.secondField'] }}</div>
    </div>

    <div>
      <label for="des">Third Field:</label>
      <input
        id="dynamicRules-thirdField"
        v-model="state.form.thirdField"
        type="text"
        class="tw-border"
      />
      <div class="tw-text-red-500">{{ state.errors['form.thirdField'] }}</div>
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
