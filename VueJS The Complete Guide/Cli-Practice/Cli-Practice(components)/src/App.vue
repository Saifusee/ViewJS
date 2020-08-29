<template>
<div>
          <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>

<!--  This two are basic example of how to declare components globally and locally above are same new practice of 
linking parent and child components in vue -->
<div style="text-align:center">
<local-app-server-status></local-app-server-status>  
<global-app-server-status></global-app-server-status>
</div>

<div style="display: inline-block">
  <button @click="dynamicComponenetName = 'author'">Author</button>
  <button @click="dynamicComponenetName = 'writer'">Writer</button>
  <button @click="dynamicComponenetName = 'admin'">Admin</button>

<keep-alive>
<component :is="dynamicComponenetName"> </component>
</keep-alive>
<div>Here i use dynamic component where is use component tag of vue and to his attribute is i bind the my component dynamically which changes whenever we click button and with
  the given name of the component, component tag load the whole Component. But whenever i change the value of is attribute in componenet tag 
  the new componenet created not the existing load again so to avoid that i put the keep alive tag as parent of component tag to show
  that with keep alive you increase the counter and change componenet and come again component again but no data lost
</div>


</div>
</div>  
</template>

<script>
import localComponent from "./localComponent.vue"
import User from './components/User.vue';
import author from './components/author.vue';
import admin from './components/admin.vue';
import writer from './components/writer.vue';

export default {
  data()
  {
    return {
      dynamicComponenetName: "author",
    }
  },

  components: {
    "local-app-server-status": localComponent,
    "appUser": User,
    "admin": admin,
    "author": author,
    "writer": writer,
  }
}
</script>

<style>
/* <!-- Add Bootstrap Css cdn i dont have net so i dont do it right now --> */
</style>
