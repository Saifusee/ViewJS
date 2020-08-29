<template>
  <div class="container">
    <header-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></header-bar>
    <add-new-quote @quoteAdded="createNewQuote"></add-new-quote>
    <quote-grid :quotes="quotes" @deleteIndex="deleteQuote"></quote-grid>
    <div class="alert alert-info text-center"><b>Info : </b>Click the Buttons by just clicking on them.</div>
  </div>
</template>

<script>

import quoteGrid from "./components/quoteGrid.vue";
import newQuote from "./components/newQuote.vue";
import header from "./components/header.vue";

export default {
  components:
  {
    "quoteGrid": quoteGrid,
    "addNewQuote": newQuote,
    "headerBar": header

  },
  
  data()
  {
    return {
      quotes:
      [
        "Random Quote as you like it"
      ],
      maxQuotes: 10
    };
  },

  methods:
  {
    createNewQuote(eventOrQuote)
    {
      if(this.quotes.length >= this.maxQuotes)
      {
        return alert("You can add Maximum 10 Quotes Delete some quotes first");
      }
      this.quotes.push(eventOrQuote);
    },

    deleteQuote(eventOrIndex)
    {
      this.quotes.splice(eventOrIndex,1);
    }
  }
}
</script>

<style>
</style>
