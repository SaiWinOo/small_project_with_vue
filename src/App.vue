<template>
  <div class="font-mono" >
    <the-header></the-header>
    <the-resource></the-resource>

  </div>
</template>

<script>
import BaseButton from "./components/UI/BaseButton.vue";
import TheHeader from "./components/Shared/TheHeader.vue";
import TheResource from "./components/Resource/TheResource.vue";
export default {
  name:'App',
  components: {TheResource, TheHeader, BaseButton},
}
</script>

<style scoped>

</style>