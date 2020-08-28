<template>
<div>
<local-app-server-status></local-app-server-status>  

<global-app-server-status></global-app-server-status>
</div>  
</template>

<script>
import localComponent from "./localComponent.vue"
export default {
  components: {
    "local-app-server-status": localComponent
  }
}
</script>

<style lang="scss">

</style>
