<template>
  <div class="item-card">
    <img
      class="icon"
      src="../../public/assets/samia_assets/icons/Asset 12ldpi.png"
      alt=""
    />
    <img
      class="primary"
      :src="require(`../../public/assets/samia_assets/images/${image}`)"
      alt=""
    />
    <div class="pra-desc">
    <a class="item-click" href="#">{{ description }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePractice",
  props: ["image", "description"],
};
</script>
