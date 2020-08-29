<template>
    <div class="component">
        <h1>You may edit the {{nameFromParentUserVue}} here</h1>
        <p>Edit me! ////// {{game }} </p>
    </div>
</template>

<script>
    import { eventBus } from '../main';

export default {
    name: "UserEdit",
    data() 
    {
       return{
            game: "off"
       };
    },
    props:
    {
        nameFromParentUserVue: 
        {
            type: [String,Boolean],   
        }
    },

        created()
    {
        eventBus.$on("gameHave", (event) => {
            this.game = event;
        })
    
    },
    methods:{


    
     }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
