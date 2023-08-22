<script setup>
import { reactive, computed, onMounted } from 'vue';

import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';

const state = reactive({
  table: [],
});

const rules = computed(() => {
  const localRules = {
    table: {
      $each: helpers.forEach({
        firstField: { required },
        secondField: { required },
      }),
    },
  };

  return localRules;
});

onMounted(() => {
  state.table = [{ firstField: '', secondField: '' }];
});

const addRow = () => {
  state.table.push({ firstField: '', secondField: '' });
};

const removeRow = (idx) => {
  state.table.splice(idx, 1);
};

const v$ = useVuelidate(rules, state);

const submit = async () => {
  await v$.value.$validate();
};
</script>

<template>
  <div>
    <div class="tw-font-bold">Tabular Form</div>

    <button
      class="tw-bg-blue-500 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-1 tw-rounded"
      @click="addRow"
    >
      Add
    </button>

    <table>
      <tr v-for="(row, idx) in state.table" :key="idx">
        <td>
          <input v-model="row.firstField" class="tw-border" />
          <div
            v-for="error of v$.table.$each.$response.$errors[idx].firstField"
            :key="error"
            class="tw-text-red-500"
          >
            {{ error.$message }}
          </div>
        </td>
        <td>
          <input v-model="row.secondField" class="tw-border" />
          <div
            v-for="error of v$.table.$each.$response.$errors[idx].secondField"
            :key="error"
            class="tw-text-red-500"
          >
            {{ error.$message }}
          </div>
        </td>
        <td>
          <button
            class="tw-bg-red-500 hover:tw-bg-red-700 tw-text-white tw-px-4 tw-py-1 tw-rounded"
            @click="removeRow(idx)"
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
