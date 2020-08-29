<template>
    <div class="row">
        <singleQuote
         v-for="(quote, index) in quotes"
        @click.native="deleteSelect(index)"
         >
            {{quote}}
        </singleQuote>
    </div>
</template>
<script>

import quote from "./quote.vue";

export default {
        props:
    {
        quotes: 
        {
            type: [Array,String]
        }
    },

    components:
    {
        "singleQuote": quote,
    },
    data()
    {
        return {
            
        }
    },

    methods:
    {
        deleteSelect(index)
        {   if(confirm("Are you sure to Delete the quote?"))
        {
             this.$emit("deleteIndex", index);
        }
        }
    }
}
</script>
<style>

</style>