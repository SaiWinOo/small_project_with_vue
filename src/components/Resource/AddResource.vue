<template>
<base-card>
  <teleport to="body">
    <error-dialog v-if="invalid" @confirm-invalid="confirmInvalid" :invalid="invalid" ></error-dialog>
  </teleport>
  <form action="" @submit.prevent="submitData" >
    <div>
      <label for="title" class="mb-2 block ">Title</label>
      <input v-model="title" type="text" class="w-full input" id="title" >
    </div>
    <div>
      <label for="description" class="mb-2 block ">Description</label>
      <textarea v-model="description" rows="6" class="w-full input" id="description" ></textarea >
    </div>
    <div class="mb-5">
      <label for="link" class="mb-2 block ">Resource Link</label>
      <input v-model="link" type="text" class="w-full input" id="link" >
    </div>
    <base-button >Submit</base-button>
  </form>
</base-card>
</template>

<script>
export default {
  name: "AddResource",
  inject:['addResource'],
  provide(){
    return {
      invalid: this.invalid,
    }
  },
  data() {
    return {
      title: '',
      description:'',
      link: '',
      invalid: false,
    }
  },
  methods: {
    confirmInvalid() {
      this.invalid = false;
    },
    submitData() {
      if(this.title.trim() === '' || this.description.trim() === '' || this.link.trim() === ''){
        this.invalid = true;
        return;
      }
      this.addResource(this.title,this.description,this.link)
    }
  },
}
</script>

<style scoped>

</style>