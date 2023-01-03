
<template>
    <div class="item">
      <img 
      :src="require(`../../public/assets/samia_assets/images/${image}`)"
       alt="">
       <h5 class="ptblsstr">
        {{title}}
       </h5>
       <p class="desc">
        {{description}}
        <a class="more" :href="link">More</a>
       </p>
       
    </div>
</template>

<script>

export default {
  name: "PersonTeam",
  props: ["title", "description", "image","link"],
};
</script>