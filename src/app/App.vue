<template>
  <div>
    <h1 v-class="title-1">Static css class</h1>
    <h1 v-class.expr="`title-${1+1}`">Dynamic css class</h1>
  </div>
</template>

<script>
</script>

<style module>
.title-1 {
  color: purple;
}

.title-2 {
  color: red;
}
</style>
