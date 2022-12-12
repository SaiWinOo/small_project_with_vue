<template>
  <div class="mt-5 ">
    <div class="flex justify-center">
      <base-button :class="{'bg-green-400': selectedComponent === 'resource-item'}" @click="setSelectedComponent('resource-item')">Resources lists</base-button>
      <base-button :class="{'bg-green-400': selectedComponent === 'add-resource'}" @click="setSelectedComponent('add-resource')">Add Resources</base-button>
    </div>
    <div class="mx-5">
      <component :is="selectedComponent"></component>
    </div>

  </div>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";
import AddResource from "./AddResource.vue";
export default {
  name: "TheResource",
  components:{ ResourceItem,AddResource},
  provide(){
    return {
      resources: this.resources,
      addResource : this.addResource,
    }
  },
  data() {
    return {
      selectedComponent: 'add-resource',
      resources:[
        {id:1, title: 'Vue js',description: 'Vue js is javascript framework',link: 'https://vuejs.org'},
        {id: 2, title: 'Google',description: 'Learn How To GOogLe',link: 'https://google.com'},
      ]
    }
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
    addResource(title,description,link){
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: link,
      }
      this.resources.unshift(newResource);
      this.selectedComponent = 'resource-item';
    }
  },
}
</script>

<style scoped>

</style>