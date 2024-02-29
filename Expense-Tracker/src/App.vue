<template>
<Header />

<div class="container"> 
    <Balance :total="+total"/>
    <Expense :income="+income" :expense="+expense"/>
    <TransactionList :transctions="transctions" 
     @transactionEmit="handletransactiondeleted"/>
    <AddTransaction @transactionSubmitted="handleSubmitted"/>

</div>
</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import Expense from './components/Expense.vue';
import AddTransaction from './components/AddTransaction.vue';
import TransactionList from './components/TransactionList.vue';

import {useToast}  from 'vue-toastification' 
import { ref, computed, onMounted } from 'vue';

const toast = useToast();

const transctions = ref([])

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transctions'));

  if (savedTransactions) {
    transctions.value = savedTransactions;
  }
});
//get total
const total = computed(()=> {
    return transctions.value.reduce((acc, transction)=> {
        return acc + transction.amount;
    },0);
});

//get income

const income = computed(()=> {
    return transctions.value
    .filter((transction)=> transction.amount > 0)
    .reduce((acc, transction)=> {
        return acc + transction.amount;
    },0).toFixed(2);
});

//get expensse
const expense = computed(()=> {
    return transctions.value
    .filter((transction)=> transction.amount < 0)
    .reduce((acc, transction)=> {
        return acc + transction.amount;
    },0).toFixed(2);
});

// Add handleSubmitted
const handleSubmitted = (transactionData) => {
    transctions.value.push({
        id: generateUniquieId(),
        text: transactionData.text,
        amount: transactionData.amount,
    });

    saveTranasctionToLocalStorage();
    toast.success('Transction added');
}

//generate uniquie id
const generateUniquieId = () => {
    return Math.floor(Math.random() * 1000000);
}

//Delete transaaction

const handletransactiondeleted = (id) => {
    transctions.value = transctions.value.filter(
        (transction) => transction.id !== id);
        saveTranasctionToLocalStorage();
        toast.success("Transaction deleted");
    };
 
 // save to localstorage
 const saveTranasctionToLocalStorage = () => {
    localStorage.setItem('transctions', JSON.stringify(transctions.value));
 }
</script>