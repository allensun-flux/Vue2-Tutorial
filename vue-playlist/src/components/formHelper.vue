<template>
  <div>
    <h1>Please fill out our form...</h1>
    <form action="">
      <div id="form-header">
        <slot name="form-header" />
      </div>
      <div id="form-fields">
        <slot name="form-fields" />
      </div>
      <div id="form-controls">
        <slot name="form-controls" />
      </div>
      <div id="useful-links">
        <ul>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
      </div>
    </form>
    <!-- <slot name="title"></slot>
    <h1>I'm a form Helper</h1>
    <slot name="text"></slot> -->
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
h1{
  color: red;
}
</style>