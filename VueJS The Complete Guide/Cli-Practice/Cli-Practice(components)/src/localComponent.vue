<template>
<div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
export default {
    data: function()
    {
        return {
            status: "Criitical"
        }
    },

    methods: 
    {
        changeStatus()
        {
            if(this.status === "Normal")
            {
            this.status = "Critical";
            } else 
            {
                this.status = "Normal";
            }
        }
    }
}
</script>
<style  lang="scss">

</style>