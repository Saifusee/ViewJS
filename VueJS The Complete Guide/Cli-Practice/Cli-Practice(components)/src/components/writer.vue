<template>
    <div>
    <div>
        <span style="background-color: #cecece">This is Writer Brother</span>
    </div>
        <div>
        <div><input type="button" value="Increase Counter" @click='incCount'> {{counter}}</div>
    </div>
    </div>
</template>
<script>
export default {
        data()
    {
       return{
           counter: 0
       } 
    },

        methods:
    {
        incCount()
        {
            this.counter++;
        }
    }
}
</script>
<style scoped>

</style>