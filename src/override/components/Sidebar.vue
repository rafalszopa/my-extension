<template>
  <div class="sidebar">
    <h1>Sidebar</h1>
    <hello-world />
    <span>{{ test }}</span>
    <ul>
      <ul>
        Link 1
      </ul>
      <ul>
        Link 2
      </ul>
      <ul>
        Link 3
      </ul>
      <ul>
        Link 4
      </ul>
      <ul>
        Link 5
      </ul>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import sayHello from "@/override/services/service";
// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from "../../components/HelloWorld.vue";

onMounted(() => sayHello());
const test = ref(2);
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  width: 300px;
  background: #191919;
  height: 100vh;
}
</style>