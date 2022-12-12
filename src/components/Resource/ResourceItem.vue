<template>
<div class="mt-10 ">
  <base-card v-for="res in resources" :key="res.id">
    <div>
      <h1 class="font-bold text-3xl ">{{ res.title }}</h1>
      <p>{{ res.description }}</p>
      <a class="text-orange-500 hover:text-orange-700 text-xl " :href="res.link">View Resources</a>
    </div>
  </base-card>
</div>
</template>

<script>
export default {
  name: "ResourceItem",
  inject:['resources'],
}
</script>

<style scoped>

</style>