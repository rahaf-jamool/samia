<template>
  <div class="item">
    <h3 class="title ptblsstr">{{ title }}</h3>
    <div class="description">
      <p v-for="desc in description" :key="desc">{{ desc }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Location",
  props: ["title", "description"],
};
</script>
