<script setup>
import { reactive, computed, onMounted } from 'vue';
import { useValidator, useValidation } from 'vue-formor';

const state = reactive({
  table: [],
  errors: {},
});

const validator = useValidator();

const validation = useValidation(
  [
    [computed(() => state.table), [validator.required]],
    [
      computed(() => state.table),
      (row, _idx) => [
        [computed(() => row.firstField), [validator.required]],
        [computed(() => row.secondField), [validator.required]],
      ],
    ],
  ],
  state,
);

onMounted(() => {
  state.table = [{ firstField: '', secondField: '' }];
});

const add = () => {
  const arr = [...state.table];
  arr.push({ firstField: '', secondField: '' });
  state.table = arr;
};

const remove = (idx) => {
  const arr = [...state.table];
  arr.splice(idx, 1);
  state.table = arr;
};

const submit = () => {
  if (validation.validate()) {
    console.log('Submit');
  }
};
</script>

<template>
  <div>
    <div class="tw-font-bold">Tabular Form</div>

    <button
      class="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-1 tw-rounded"
      @click="add"
    >
      Add
    </button>

    <table>
      <tr v-for="(row, idx) in state.table" :key="idx">
        <td>
          <input v-model="row.firstField" class="tw-border" />
          <div class="tw-text-red-500">{{ state.errors[`table[${idx}].firstField`] }}</div>
        </td>
        <td>
          <input v-model="row.secondField" class="tw-border" />
          <div class="tw-text-red-500">{{ state.errors[`table[${idx}].secondField`] }}</div>
        </td>
        <td>
          <button
            class="tw-bg-red-500 hover:tw-bg-red-700 tw-text-white tw-px-4 tw-py-1 tw-rounded"
            @click="remove(idx)"
          >
            Remove
          </button>
        </td>
      </tr>
    </table>

    <button
      type="button"
      class="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-1 tw-rounded"
      @click="submit"
    >
      Submit
    </button>
  </div>
</template>
