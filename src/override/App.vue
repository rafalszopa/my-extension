<template>
  <main class="main">
    <sidebar />
    <board />
  </main>
</template>

<script>
import Board from "@/override/pages/Board";
import Sidebar from "@/override/components/Sidebar";

export default {
  name: "App",
  components: { Board, Sidebar },
};
</script>

<style>
html {
  color: white;
}
body {
  margin: 0;
  background-color: #1e1e1e;
}
</style>
