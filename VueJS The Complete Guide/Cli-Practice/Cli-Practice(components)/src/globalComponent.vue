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
            status: "Global Component Criitical"
        }
    },

    methods: 
    {
        changeStatus()
        {
            if(this.status === "Global Component Normal")
            {
            this.status = "Global Component Critical";
            } else 
            {
                this.status = "Global Component Normal";
            }
        }
    }
}
</script>
<style  lang="scss">

</style>