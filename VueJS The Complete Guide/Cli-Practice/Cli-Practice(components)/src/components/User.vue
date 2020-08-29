<template>
    <div class="component">
        <h1>The {{name}} Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :nameFromParentUserVue="name"
                @parentFollowChildName="nameChangeFromChild($event)"
                >
                 
                 </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                :nameFromParentUserVue="name" 
                >
                
                </app-user-edit>





                <slotExample>
                     <p slot="gata">Gata rahe.......</p>
                     <p slot="jai">JAi HO</p>
                     <p slot="nope">Nope</p>
                     </slotExample>





            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import slot from './slot.vue';


    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit,
            slotExample: slot
        },

        data()
        {
            return {
                name: "Annav's"
            };
        },

        methods:
        {
            changeName()
            {
                return this.name = "Maxxim's"; 
            },

            nameChangeFromChild(event)
            {
                this.name = event;
                //Or instead u can put vanilla javascript expression simply in html \\\\\  @parentFollowChildName="name = $event"  /////
            }
            
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
