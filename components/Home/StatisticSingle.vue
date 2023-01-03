<template>
<div class="statistic-single ">
    <div class="headerDivider"></div>
    <div class="icon">
        <img :src="require(`../../public/assets/samia_assets/icons/${icon}`)" alt="">

    </div>
    <h2 class="title">
        {{title}}
    </h2>
    <p class="description">
        {{description}}
    </p>
</div>
</template>
<script>

export default {
name:"Statistic Single",
props:[
    'title','icon','description'
],
};
</script>
