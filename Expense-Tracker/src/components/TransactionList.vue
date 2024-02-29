<template>
    <h3>History</h3>
      <ul id="list" class="list">
        
        <li 
         v-for="transction in transctions"
         :key="transction.id"
         :class="transction.amount < 0 ? 'minus' : 'plus'">
          {{ transction.text }} <span>${{ transction.amount }}</span>
          <button @click="deleteTransaction(transction.id)"
          class="delete-btn">x</button>
        </li>
        <!-- <li class="plus">
          Cash <span>$400</span><button 
          class="delete-btn">x</button>
        </li> -->
      </ul>
</template>

<script setup>
// import emits from defineEmits('transactionEmit');

import {defineProps} from 'vue'
const emit = defineEmits('transactionEmit');
const props = defineProps({
  transctions: {
    type: Array,
    required: true,
  }
})

const deleteTransaction = (id) => {
  console.log(id);
  emit('transactionEmit', id);
}
</script>