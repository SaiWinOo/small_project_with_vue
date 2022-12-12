<template>
  <div @click="confirmInvalid" class="fixed font-mono flex justify-center items-center  w-full  h-screen  dialog ">
    <base-card class="border rounded-xl">
      <h1 class="bg-green-300 p-2 text-3xl font-bold ">Invalid Input! </h1>
      <p class="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dicta eaque iure nisi repudiandae suscipit tenetur voluptas. Amet cumque deserunt, fuga iusto labore nam quae, quia repellat sit suscipit tempore?</p>
      <div class="text-end ">
        <base-button  @click="confirmInvalid" class="px-10 font-bold py-2">Okay</base-button >
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  name: "ErrorDialog",
  methods: {
    confirmInvalid() {
      this.$emit('confirm-invalid');
    }
  },
}
</script>

<style scoped>
.dialog{
  top: 0;
  background-color: rgba(0, 0, 0, 0.45)
;
}

</style>