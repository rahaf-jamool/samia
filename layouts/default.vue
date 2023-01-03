<template>
  <div>
    <Header :class="{headerimg:true}" :isVisible ="true" />
      <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>
