<template>
  <div>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "App",
  components: { HelloWorld },
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
