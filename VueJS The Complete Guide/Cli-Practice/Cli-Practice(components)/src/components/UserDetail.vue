<template>
    <div class="component">
        <h1>You may view the {{nameFromParentUserVue}} Details here </h1>
        <p>Here i use the prop method to transfer data from parent component to child component</p>
        <button @click="changeNameInChild">Change name in child and transfer the data to Parent !!CLick Me!!</button>
        <button @click="transferToSibling"> Transfer To Sibling (Game Status) </button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
export default{

    // props: ['nameFromParentUserVue'],
    data()
    {
        return {
            gameStatus: "On"
            }
    },
    props:
    {
        nameFromParentUserVue: 
        {
            type: [String,Boolean],   
        }
    },

    methods:
    {
        changeNameInChild()
        {
            this.nameFromParentUserVue = "Kashif's";
            this.$emit("parentFollowChildName", this.nameFromParentUserVue);



        },
        transferToSibling()
        {
            eventBus.$emit("gameHave", this.gameStatus);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
